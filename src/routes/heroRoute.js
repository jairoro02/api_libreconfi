const express = require('express')
const heroSchema = require("../models/heroesModel")
const router = express.Router();



router.get('/heroes/', async(req,res)=>{
    heroSchema.find().then(hero => res.json(hero)).catch(err=>res.json(err))
})

router.get('/heroes/:id/', async(req,res)=>{
    const { id } = req.params;
    heroSchema.findById(id).then(hero => res.json(hero)).catch(err=>res.json(err))
})

router.post('/heroes/',async(req,res)=>{
    console.log("f")
    const hero = new heroSchema(req.body);
    await hero.save()
    res.json(hero);
})

router.delete('/heroes/:id',(req,res)=>{
    const { id } = req.params;
    heroSchema.remove({_id: id})
    .then(()=>res.json(hero))
    .catch(err=>res.json(err))
})

module.exports = router;