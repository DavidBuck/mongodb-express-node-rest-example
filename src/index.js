import "dotenv/config"
import cors from "cors"
import bodyParser from "body-parser"
import express from "express"

import models, { connectDb } from "./models"
import routes from "./routes"
import dbSeeder from "./lib/dbSeeder"

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.context = {
    models,
  }
  next()
})

app.use("/sensors", routes.sensor)
app.use("/sensorvalues", routes.sensorValue)

connectDb().then(async () => {
  if (process.env.SEED_DB) {
    console.log("Erasing & seeding database.")
    await Promise.all([
      models.Sensor.deleteMany({}),
      models.SensorValue.deleteMany({}),
    ])

    dbSeeder()
  }

  app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.PORT}!`)
  )
})
