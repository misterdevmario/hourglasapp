const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connection =  await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected: ${connection.connection.name}`.bgCyan)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb