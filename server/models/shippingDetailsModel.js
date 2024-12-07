const mongoose = require('mongoose')

const shippingDetailsSchema =  new mongoose.Schema({
    address : String,
    email: String,
    zipcode: String ,
    mobileNo: Number ,
})

const shippingModel = mongoose.model('shippingDetails',shippingDetailsSchema)

module.exports = shippingModel