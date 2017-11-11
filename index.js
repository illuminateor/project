const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true },(err)=>{
    if(err){
        console.log('Could not connect to database ', err);
    } else {
        console.log(config.secret);
        console.log('Connected to database: ' + config.db)
}});

app.get('*', (req, res) => {
    res.send('hellos world');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});