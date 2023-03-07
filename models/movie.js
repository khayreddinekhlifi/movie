const mongoose =require('mongoose')

const schema=mongoose.Schema

const movieschema= new schema({
    imgeURL:{
        type:URL,
        required:true
    },
    author:{
        name:{
            type:String,
            required:true
        },
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
