const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = mongoose.connect('mongodb://127.0.0.1:27017/keyTempoDB')
        .then(() => {
            console.log("CONNECTED TO keyTempoDB DATABASE!")
        })
        .catch((err) => {
            console.log("FAILED TO CONNECT!");
            console.log(err);
        })
}

module.exports = connectDB;