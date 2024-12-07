const mongoose = require('mongoose')

const contactSchema =  new mongoose.Schema({
    fullName : String,
    email: String,
    message: String ,
})

const contactModel = mongoose.model('contactDetails',contactSchema)

module.exports = contactModel