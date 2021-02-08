const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);

const LISTEN_PORT = 8080;           //port larger than 1000

server.listen(LISTEN_PORT);         //start the server
console.log('Listening on port: ' + LISTEN_PORT);

//setting "root" folder of all web files to public
app.use( express.static(__dirname + '/public'));

//default route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html' );
});