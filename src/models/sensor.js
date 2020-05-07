import mongoose from "mongoose"

const sensorSchema = new mongoose.Schema({
  sensorname: {
    type: String,
    required: true,
    unique: true,
  },
  type: String,
  location: String,
})

const Sensor = mongoose.model("Sensor", sensorSchema)

export default Sensor
