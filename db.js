const mongoose = require('mongoose')
require('dotenv').config()

const DB_URL = process.env.DB_URL;
const connectDB = () => mongoose.connect(DB_URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

module.exports = { connectDB }