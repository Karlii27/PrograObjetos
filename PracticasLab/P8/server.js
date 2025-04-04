const express = require('express')
const mongoose= require('mongoose')
const cors = require('cors')
const taskRoutes = require('./routes/taskRoutes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

//Conectar con MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('Conectado a MongoDB')})
.catch((error)=> {console.log("Error al conectar a MongoB ", error)})

//rutas
app.use('/ap1/tareas')