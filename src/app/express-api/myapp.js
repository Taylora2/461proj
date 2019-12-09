const bodyParser = require('body-parser');

const routes = require('./routes/routes');

// Require packages and set the port
const express = require('express');
const port = 8000;
const myapp = express();


const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
};

myapp.use(cors(corsOptions))

myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({
    extended: true,
}));


routes(myapp);

// Start the server
const server = myapp.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});