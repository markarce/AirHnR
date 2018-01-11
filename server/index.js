const config = require('../config');
const db = require('../database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const googleMaps = require('../lib/index.js')
const data = require('./serverDummyData.js');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.get('/api/listings',function(req, res){
    var location = req.query.q;
    googleMaps.getPlaceCoordinates(location,function(results){
      res.json(db.getLocationsNear(results.lat, results.lon, 5));
    })
})

app.get('/api/listings/:listingId', (req, res) => {
  console.log(req.params);
  let listing = data.data.testDetailItems.filter(listing => {
    return listing.id === parseInt(req.params.listingId);
  });
  res.json(listing[0]);
});


app.post('/api/bookings', (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.listen(config.serverPort, () => {
  console.log(`Server listening on port ${config.serverPort}`)
});
