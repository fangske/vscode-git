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
        },
        {
            "dealerId": "GS0000899",
            "legalName": "Daimler AG",
            "address": {
                "street": "Trnkestrae 18",
                "zipCode": "70597",
                "city": "Stuttgart",
                "countryIsoCode": "DE"
            }
        },
        {
            "dealerId": "GS0017470",
            "legalName": "Felix Kloz GmbH",
            "address": {
                "street": "Burgstallstrae 95",
                "zipCode": "70199",
                "city": "Stuttgart",
                "countryIsoCode": "DE"
            }
        }
    ]
}

const dealers = Object.values(myObj)

console.log(dealers)
