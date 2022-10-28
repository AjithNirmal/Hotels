const mongoose = require("mongoose")

let hotels = new mongoose.Schema({
    ResturantName:{
        type:String,
        required:true
    },
    Ratings:{
        type:String,
        required:true
    }
})
const hotelModals = mongoose.model("updating",hotels)
module.exports = hotelModals