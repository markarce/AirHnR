const config = require('../config');
const db = require('../database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const googleMaps = require('../lib')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.get('/api/listings',function(req, res) {
  //return all listings near the searched area
  googleMaps.getPlaceCoordinates(req.query.q, googleResults => {
    db.getListingsNear(googleResults.lat, googleResults.lon, 3000)
      .then(dbResults => {
        res.status(200).json(dbResults);
      }).catch(err => {
        console.warn(err);
        res.status(503).end();
      });
  });
});

app.get('/api/listing/', function(req, res){
  //move helper function to lib folder
  // var findListing = function(listingID, listings) { 
  //   for (var i = 0; i < listings.length; i++){
  //     if (listingID === listings[i].id) {
  //       return listing[i];
  //     } else {
  //       return 'err';
  //     }
  //   }
  // }
  res.json("Hello!!!")

})


app.post('/api/bookings', (req, res) => {
  console.log(req.body);
  res.send('ok');
});
app.listen(config.serverPort, () => {
  console.log(`Server listening on port ${config.serverPort}`)
});
