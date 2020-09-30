# PUG Rovigo - IoT e web development
- [Meetup](https://www.meetup.com/it-IT/pug-rovigo/events/273003189/)
- [Slides](https://slides.com/eppak/iot-e-web-development)
- [YouTube](https://www.youtube.com/watch?v=xDBN3e_CoN8&feature=youtu.be)

Per la demo sono necessari questi strumenti
- Server con docker installato, anche la propria locale va bene.
- Un Raspberry pi con nodejs installato.
- Un sensore DHT22.
- Un relè.

### Broker Mosquitto
Copiare in locale quello che è presente nel repository.

    $ touch /home/[utente]/mosquitto.conf
    $ docker run -it -p 1883:1883 -p 9001:9001 -v /home/[utente]/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto

### NodeRed

    $ docker run -it -p 1880:1880 --name mynodered nodered/node-red

Entrare nell'interfaccia e incollare il file flows.json, ricordarsi di impostare la connessione al broker

### Raspberry
Impostare credenziali e indirizzi nel sorgente.

    $ cd rpi
    $ npm install
    $ node mqtt.js

## Schermate
![Dashboard](https://github.com/pug-rovigo/iot-web-dev-2020-09-23/raw/master/nodered/dash.png)

![Programma](https://github.com/pug-rovigo/iot-web-dev-2020-09-23/raw/master/nodered/prog.png)

## Licenza
MIT
