require('dotenv').config();
const PORT=process.env.PORT || 3000;

const db=require('./config/db');
const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());
const Issue=require('./model/issue');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

db.then(()=>{
    app.get('/',(req,res)=>{
        res.send('get requres made at /')
    })
    app.post('/import',async(req,res)=>{
        const issue=new Issue(req.body);
        await issue.save();
        res.send(issue);
    })
    app.get('/issues',async(req,res)=>{
        console.log("Check1");
        const issue=await Issue.find();
        res.send(issue);
    })
    
    app.get('/issue/:id',async(req,res)=>{
        const st=req.params.id;
        if(!isNaN(st))
        {
            const issue=await Issue.findOne({id: req.params.id});
            res.send(issue);
        }
        else
        {
            const str=`/^${st}/i`;
            console.log(str);
            const issue=await Issue.find({ Name: { $regex: new RegExp(st, 'i') } });
            console.log(issue);
            res.send(issue);
        }
    })
    app.listen(PORT,()=>{
        console.log(`server running at http://localhost:${PORT}/`);
    })
})