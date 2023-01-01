import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './controllers/cheese.js'

dotenv.config()

const PORT = process.env.PORT ?? 3000


 
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json({message: "it works!"})
})
 
app.use("/cheese", router)

//listener
app.listen(PORT, ()=>console.log(`listening on ${PORT}`))