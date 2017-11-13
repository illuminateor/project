const express = require('express'); // minimalistic web framework for node
const router = express.Router();
const app = express();  // Initiate Express Application
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true },(err)=>{
    if(err){
        console.log('Could not connect to database ', err);
    } else {
        console.log('Connected to database: ' + config.db)
}});

app.use(cors({
    origin:'http://localhost:4200'
}));

// Provide static directory for frontend
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false }));
// Parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication',authentication);

// Connect server to Angular 4 index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
});

// Start Server: Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
});