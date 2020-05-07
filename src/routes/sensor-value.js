import { Router } from "express"

const router = Router()

router.get("/", async (req, res) => {
  const sensorValues = await req.context.models.SensorValue.find()
  return res.send(sensorValues)
})

router.get("/:sensorValueId", async (req, res) => {
  const sensorValue = await req.context.models.SensorValue.findById(
    req.params.sensorValueId
  )
  return res.send(sensorValue)
})

router.post("/", async (req, res) => {
  const sensorValue = await req.context.models.SensorValue.create({
    temp: req.body.temp,
    humidity: req.body.humidity,
    time: req.body.time,
    sensor: req.body.sensor,
  })

  return res.send(sensorValue)
})

router.put("/:sensorValueId", async (req, res) => {
  const sensorValue = await req.context.models.SensorValue.findByIdAndUpdate(
    req.params.sensorValueId,
    {
      temp: req.body.temp,
      humidity: req.body.humidity,
      time: req.body.time,
      sensor: req.body.sensor,
    }
  )

  return res.send(sensorValue)
})

router.delete("/:sensorValueId", async (req, res) => {
  const sensorValue = await req.context.models.SensorValue.findById(
    req.params.sensorValueId
  )

  let result = null
  if (sensorValue) {
    result = await sensorValue.remove()
  }

  return res.send(result)
})

export default router
