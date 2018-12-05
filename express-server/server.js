const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Dummy data hardcoded

app.get('/', function(req, res){
    res.send('hello from server');
})

app.post('/add', function(req, res){
    console.log(req.body);
    res.status(200).send({'message' : 'Data Received'})
})

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT);
});