const express = require("express")
const app = express();
const mongoose = require("mongoose")
let updatingModals = require("./Schema/hotelveggie")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(process.env.PORT || 3003, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
mongoose.connect("mongodb+srv://Ajith:ajith@hotels.fvhkglh.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("cloud Database connected")
},(err)=>{
   console.log("Db not connected",err)
})

app.get("/veggie",(req,res)=>{
    updatingModals.find().then((datas)=>{
     res.status(200).send(data)
    })
})

app.post("/update/:id/:ratings",(req,res)=>{
    updatingModals.create({ResturantName:req.params.id,Ratings:req.params.ratings}).then((data)=>{
        res.status(200).send("Data Updated Successfully")
    }).catch((err)=>{
        res.status(503).send(err)
    })
})


