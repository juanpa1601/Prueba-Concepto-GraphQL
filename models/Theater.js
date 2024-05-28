const mongoose = require('mongoose')

const TheaterSchema = new mongoose.Schema({

    theaterId: { type: Number, required: true },
    location: {
        address: {
            street1: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipcode: { type: String, required: true }
        }
    }
})

module.exports = mongoose.model('Theater', TheaterSchema)