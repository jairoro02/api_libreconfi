const express = require('express')
const villainSchema = require("../models/villainsModel")
const router = express.Router();


//Nos devuelve a todos los villanos
router.get('/villains/', async(req,res)=>{
    villainSchema.find().then(villain => res.json(villain)).catch(err=>res.json(err))
})


//Devuelve al villano con la id introducida
router.get('/villains/:id/', async(req,res)=>{
    const { id } = req.params;
    villainSchema.findById(id).then(villain => res.json(villain)).catch(err=>res.json(err))
})



//Se crea el villano con los datos introducidos
router.post('/villains/',async(req,res)=>{
    console.log("f")
    const villain = new villainSchema(req.body);
    await villain.save()
    res.json(villain);
})


//Se actualiza el villano con los datos introducidos
router.put('/villains/:id/',(req,res)=>{
    const { id } = req.params;
    const { name,age,universe,kills } = req.body;
    villainSchema.updateOne({_id:id},{$set:{name,age,universe,kills}}).then((villain)=>res.json(villain)).catch(err=>res.json(err))

})


//Se borra el villano con los datos introducidos
router.delete('/villains/:id/',(req,res)=>{

    const { id } = req.params;
    villainSchema.deleteOne({_id: id})
    .then(()=>res.json(villain))
    .catch(err=>res.json(err))
})

module.exports = router;