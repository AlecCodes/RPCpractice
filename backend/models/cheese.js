import mongoose from './connection.js'
const {Schema, model} = mongoose

//Cheese schema
const cheeseSchema = new Schema({
    name: String,
    tasty: Boolean
}, {timestamps: true})

//Cheese Model
const Cheese = model("Cheese", cheeseSchema)

export default Cheese