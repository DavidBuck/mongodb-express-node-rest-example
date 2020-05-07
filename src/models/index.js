import mongoose from "mongoose"

import Sensor from "./sensor"
import SensorValue from "./sensor-value"

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
}

const models = { Sensor, SensorValue }

export { connectDb }

export default models
