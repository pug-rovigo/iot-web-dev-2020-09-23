var sensor = require("node-dht-sensor");
var gpiop = require('rpi-gpio').promise;
var mqtt = require('mqtt');

const dht = 22;
const rele = 18
const qos = { qos: 1, retain: true };
const options = { 
					clientId:"sensor01",
					username: 'rovigo',
					password: 'pug',
					will: {
						topic: 'status',
						payload: JSON.stringify({ status: 'offline' }),
						retain: true,
						qos: 1 
					}
				};

// SETUP GPIO
require('rpi-gpio').setMode(gpiop.MODE_RPI);

gpiop.setup(rele, gpiop.DIR_OUT)
     .then(() => { return gpiop.write(rele, true); })
     .catch((err) => console.log('Error: ', err.toString()) );

// SETUP MQTT
const client  = mqtt.connect('mqtt://localhost', options);

// CONNECT
client.on('connect', function () {
  console.log('Connected');

  // ONLINE
  client.publish('status', JSON.stringify({ status: 'online' }), qos );


  // LISTEN COMMANDS
  client.subscribe('command');

  client.on('message', async (topic, message) => {
        let status = await gpiop.read(rele);

        gpiop.write(rele, !status);

        console.log("Rele toggle");
  });

  // READ CYCLE
  setInterval(async () => {

        let status = await gpiop.read(rele);

        sensor.read(dht, 4, (err, temperature, humidity) => {
          if (!err) {
            console.log(`temp: ${temperature}°C, humidity: ${humidity}%, rele ${status}`);

            client.publish('data', JSON.stringify({ ts: (new Date()).getTime(), temp: temperature, hum: humidity, status: status }), qos);
          }
        });

  }, 1000);

});
