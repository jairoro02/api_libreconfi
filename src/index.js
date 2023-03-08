const express = require("express")
require("./lib/mongoose")
const app = express()
const heroRoute = require("./routes/heroRoute")
const PORT = process.env.PORT || 3001
const conectionDB = require("./lib/mongoose");


conectionDB()

app.use(express.json())
app.use('/api', heroRoute)

app.get('/',(req,res)=>{
    res.send("Bienvenido a la api")
})





app.listen(PORT, ()=>{
    console.log(`[INFO] Servidor escuchando en ${PORT} `)
})