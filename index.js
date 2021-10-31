const express=require('express')
const cors=require('cors')
const app=express()
const productorouter = require('./router/productorouter')
const uploadrouter = require('./router/uploadrouter')
const PORT=process.env.port || 3000
app.use(cors())

app.use('/api/producto/',productorouter)
app.use('/api/admin/',uploadrouter)


app.listen(PORT,()=>{
    console.log("Servidor Ejecutando Puerto "+PORT)
})