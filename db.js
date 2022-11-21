const mongoose = require('mongoose');
const mongoURI= "mongodb+srv://iecse:iuSXIJFIUedUaLSs@cluster0.lx0lp9y.mongodb.net/gbm22";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;