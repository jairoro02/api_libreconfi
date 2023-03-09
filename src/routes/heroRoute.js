const express = require('express')
const heroSchema = require("../models/heroesModel")
const router = express.Router();


//Se muestra la lista de heroes 
router.get('/heroes/', async(req,res)=>{
    heroSchema.find().then(hero => res.json(hero)).catch(err=>res.json(err))
})


//Se muestra el héroe con la id correspondiente
router.get('/heroes/:id/', async(req,res)=>{
    const { id } = req.params;
    heroSchema.findById(id).then(hero => res.json(hero)).catch(err=>res.json(err))
})


//Se crea el heroe con los datos introducidos
router.post('/heroes/',async(req,res)=>{
    console.log("f")
    const hero = new heroSchema(req.body);
    await hero.save()
    res.json(hero);
})



//Se actualiza el heroe
router.put('/heroes/:id/',(req,res)=>{
    const { id } = req.params;
    const { name,age,universe } = req.body;
    heroSchema.updateOne({_id:id},{$set:{name,age,universe}}).then((hero)=>res.json(hero)).catch(err=>res.json(err))

})


//Se borra el heroe
router.delete('/heroes/:id/',(req,res)=>{

    const { id } = req.params;
    heroSchema.deleteOne({_id: id})
    .then(()=>res.json(hero))
    .catch(err=>res.json(err))
})

module.exports = router;