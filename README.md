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
MIT License

Copyright (c) 2020 PUG Rovigo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
