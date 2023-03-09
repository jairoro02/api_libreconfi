const express = require('express')
const userSchema = require("../models/userModel")
const router = express.Router();


//Se da una lista con todos los usuarios
router.get('/users/', async(req,res)=>{
    userSchema.find().then(user => res.json(user)).catch(err=>res.json(err))
})


//Se devuelve el usuario con el id introducido
router.get('/users/:id/', async(req,res)=>{
    const { id } = req.params;
    userSchema.findById(id).then(user => res.json(user)).catch(err=>res.json(err))
})


//Se crea un nuevo usuario con los datos introducidos
router.post('/users/',async(req,res)=>{
    console.log("f")
    const user = new userSchema(req.body);
    await user.save()
    res.json(user);
})



//Se actualiza el usuario con la id correspondiente los datos introducidos
router.put('/users/:id/',(req,res)=>{
    const { id } = req.params;
    const { name,username,email,age } = req.body;
    userSchema.updateOne({_id:id},{$set:{name,username,email,age}}).then((user)=>res.json(user)).catch(err=>res.json(err))

})


//Se borra el usuario con la id correpondiente
router.delete('/users/:id/',(req,res)=>{

    const { id } = req.params;
    userSchema.deleteOne({_id: id})
    .then(()=>res.json(user))
    .catch(err=>res.json(err))
})

module.exports = router;