const express = require("express")
const app = express();
const mongoose = require("mongoose")
let updatingModals = require("./Schema/hotelveggie")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(3003,(err)=>{
    if(!err)
    {
        console.log("Server Started on Port 3003")
    }
    else
     console.log("Server not started kiddo")
})
mongoose.connect("mongodb+srv://Ajith:ajith@hotels.fvhkglh.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("cloud Database connected")
},(err)=>{
   console.log("Db not connected",err)
})




app.get("https://hotals.herokuapp.com//veggie",(req,res)=>{
    updatingModals.find().then((datas)=>{
     res.status(200).send(datas)
    })
})

app.post("https://hotals.herokuapp.com//update/:id/:ratings",(req,res)=>{
    updatingModals.create({ResturantName:req.params.id,Ratings:req.params.ratings}).then((data)=>{
        res.status(200).send("Data Updated Successfully")
    }).catch((err)=>{
        res.status(503).send(err)
    })
})


