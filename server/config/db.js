require('dotenv').config();
const MONGODB_URL=process.env.MONGODB_URL;
const mongoose=require('mongoose');

const db=mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true
})

module.exports=db;