const mongoose = require('mongoose');
const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/minnu', {

    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.log('Failed to connect to MongoDB ');
    });
}
module.exports = connect;