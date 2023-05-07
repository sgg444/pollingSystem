// configuration for creating database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sonaligaikwad2468:3HeJdDl1mvkL5UCW@cluster0.92wruqm.mongodb.net/polling_data?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;