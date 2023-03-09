const mongoose =require('mongoose')

const schema=mongoose.Schema

const movieschema= new schema({
    imgeURL:{
        required:true
    },
    author:{
         type:String,
         required:true
    },
    nameMV:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const film =mongoose.model('film',movieschema)
 module.exports=film