const express = require('express')
const router = express.Router();
const Model = require('../model/model')
//Post method
router.post('/createPost',async(req,res)=>{
    const newPost = new Model({
        title : req.body.title,
        author : req.body.author,
        content : req.body.content
    })

       try{
           const result = await newPost.save()
           res.status(200).json(result) 
       }catch(error){
            res.sendStatus(400)
       } 
})
//Get Method
router.get('/getAllPost', async(req,res)=>{
    try{
        const result = await Model.find()
        res.status(200).json(result) 
    }catch(error){
         res.sendStatus(500)
    } 
})

router.get('/getPost/:id', async(req,res)=>{
    try{
        const result = await Model.findById(req.params.id)
        res.status(200).json(result) 
    }catch(error){
         res.sendStatus(500)
    } 
})

//Patch
router.patch('/editPost/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const newData = req.body
        const options ={new:true}
        const result = await Model.findByIdAndUpdate(id,newData,options)
        res.status(200).json(result) ;
    }catch(error){
         res.sendStatus(500)
    } 
})

router.delete('/deletePost/:id',async(req,res)=>{
    try{
        const result = await Model.findByIdAndDelete(req.params.id)
        res.send(`Delete Post with title ${result.title}`) 
    }catch(error){
        res.sendStatus(500)
    } 
})



module.exports =router;