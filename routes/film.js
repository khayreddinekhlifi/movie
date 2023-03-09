const express=require('express')
 const filmRouter= express.Router()
const film =require('./models/movie')
// create new movie
filmRouter.post('/add',async(req,res)=>{
   try {
      const newfilm =new film(req.body)
      const result =await newfilm.save()
      res.send({film: result,msg:'movie added sussecfully'})
   } catch (error) {
      console.log(error)
   }
   
  
 })

 // get all film

 filmRouter.get('/all',async(req,res)=>{
   try {
      const result= await newfilm.find()
      res.send({film: result ,msg:'all movie finded'})
   } catch (error) {
      console.log(error)
   }

 })

 //get movie by id

 filmRouter.get('/:id',async(req,res)=>{
   try {
      const result=await newfilm.findById({_id:req.params.id})
      res.send({film: result,msg:' movie by id finded'})
   } catch (error) {
      console.log(error)
   }
    
 })

 // delete movie 
 filmRouter.delete('/:id',async(req,res)=>{
   try {
      constresult= await newfilm.findByIdAndDelete({_id:req.params.id})
      res.send({msg:' movie is deleted'})
   } catch (error) {
      console.log(error)
   }
    
 })

 //update movie by id

 filmRouter.put('/:id',async(req,res)=>{
   try {
      const result = await newproduct.findByIdAndUpdate({_id:req.params.id})
      res.send({msg:' movie is updated'})
   } catch (error) {
      console.log(error)
   }
   
 })