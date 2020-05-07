import { Router } from "express"

const router = Router()

router.get("/", async (req, res) => {
  const sensors = await req.context.models.Sensor.find()
  return res.send(sensors)
})

router.get("/:sensorId", async (req, res) => {
  const sensor = await req.context.models.Sensor.findById(req.params.sensorId)
  return res.send(sensor)
})

router.post("/", async (req, res) => {
  const sensor = await req.context.models.Sensor.create({
    sensorname: req.body.sensorname,
    type: req.body.type,
    location: req.body.location,
  })

  return res.send(sensor)
})

router.put("/:sensorId", async (req, res) => {
  const sensor = await req.context.models.Sensor.findByIdAndUpdate(
    req.params.sensorId,
    {
      sensorname: req.body.sensorname,
      type: req.body.type,
      location: req.body.location,
    }
  )

  return res.send(sensor)
})

router.delete("/:sensorId", async (req, res) => {
  const sensor = await req.context.models.Sensor.findById(req.params.sensorId)

  let result = null
  if (sensor) {
    result = await sensor.remove()
  }

  return res.send(result)
})

export default router
