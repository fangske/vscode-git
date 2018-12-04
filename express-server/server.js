const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Dummy data hardcoded

const myObj = {
    "dealers": [
        {
            "dealerId": "GS0000563",
            "legalName": "Daimler AG",
            "address": {
                "street": "Mercedesstrae 137 (Einfahrt ber Benzstrae, Tor 12, Geb. 131/2)",
                "zipCode": "70327",
                "city": "Stuttgart",
                "countryIsoCode": "DE"
            }
        },
        {
            "dealerId": "GS0000897",
            "legalName": "Daimler AG",
            "address": {
                "street": "Hallschlag 65",
                "zipCode": "70376",
                "city": "Stuttgart",
                "district": "Bad Cannstatt",
                "countryIsoCode": "DE"
            }
        }
    ]
}


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