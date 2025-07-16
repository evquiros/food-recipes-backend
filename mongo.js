const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Successfully connected to database!')
    } catch(error) {
        console.error("Error connecting to database", error.message)
        process.exit(1)
    }
}

connectDB()

module.exports = connectDB