import express from "express"
import Cheese from "../models/cheese.js"

const router = express.Router()

//function for catching errors, we use a function that returns another function. res.status checks for error 400
const catcher = (res) => (error) => res.status(400).json(error)

//'/cheese' index route
router.get('/', async (req,res) => {
    const cheeses = await Cheese.find({})
    .catch(catcher(res))
    res.json(cheeses)
})

//'/cheese/:id' show route
router.get('/:id', async (req,res) => {
    const cheese = await Cheese.findById(req.params.id)
    .catch(catcher(res))
    res.json(cheese)
})

//'Cheese' create route
router.post('/', async (req,res) => {
    const cheese = await Cheese.create(req.body)
    .catch(catcher(res))
    res.json(cheese)
})

//'Cheese/:id' update route
router.put('/:id', async (req,res) => {
    const cheese = await Cheese.findByIdAndUpdate(req.params.id, req.body)
    .catch(catcher(res))
    res.json(cheese)
})

//'Cheese' delete route
router.delete('/:id', async (req,res) => {
    const cheese = await Cheese.findByIdAndRemove(req.params.id)
    .catch(catcher(res))
    res.json(cheese)
})

export default router