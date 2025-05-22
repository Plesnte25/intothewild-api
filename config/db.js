const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

// const mongoURI = process.env.MONGO_URI;
const mongoURI ="mongodb+srv://intothewildstays:5xopzIkh6cFpTynT@cluster0.q3utk.mongodb.net/itw?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to Mongo:", error);
    }
}

module.exports = connectToMongo;