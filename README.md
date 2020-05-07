# MongoDB Express Node example Rest API

This is a simple REST API using Express, Mongoose and MongoDB.

To start the server:

- start MongoDB on your local machine
- `npm run start`

## Routes

**GET**

Get all sensors - [http://localhost:3000/sensors](http://localhost:3000/sensors)

Get a sensor - `http://localhost:3000/sensors/{id}`

Get all sensorValues - [http://localhost:3000/sensorvalues](http://localhost:3000/sensorvalues)

Get a sensor value - `http://localhost:3000/sensorvalues/{id}`

**Post**

Create a sensor - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/sensors -d '{"sensorname":"Freezer Sensor 1", "type": "Arduino Uno", "location":"Main freezer"}'`

Create a sensorValue - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/sensorvalues -d '{"temp":"25.4", "humidity": "82.2", "time":"1588833969189", "sensor":"{id}"}'`

**PUT**

Update a sensor - `curl -X PUT -H "Content-Type:application/json" http://localhost:3000/sensors/{id} -d '{"sensorname":"New Freezer Sensor" , "type": "Raspberry Pi", "location":"Main freezer"}'`

Update a sensorValue - `curl -X PUT -H "Content-Type:application/json" http://localhost:3000/sensorvalues/{id} -d '{"temp":"2.4", "humidity": "82.2", "time":"1588832514", "sensor":"{id}"}'`

**Delete**

Delete a sensor - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/sensors/{id}`

Delete a sensorValue - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/sensorvalues/{id}`

## Tools

- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
