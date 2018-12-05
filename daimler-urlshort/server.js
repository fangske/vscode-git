const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http').Server(app),
    mongoose = require('mongoose'),
    btoa = require('btoa'),
    atob = require('atob'),
    connectionString = "mongodb://admin:admin123@ds125574.mlab.com:25574/mongo-testdb"
    port = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});

app.post('/add', function(req, res){
    console.log(req.body);
    res.status(200).send({'message' : 'Data Received'})
})

http.listen(port, function() {
    console.log('Server Started. Listening on localhost:' + port);
 });