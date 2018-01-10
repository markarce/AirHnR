const config = require('../config');
const knex = require('knex')({
  client: 'pg',
  connection: config.database_url + '/airhnr'
});
const knexPostgis = require('knex-postgis');
const bookshelf = require('bookshelf')(knex);

const getLocationsNear = (lat, long, radius) => {
  //lat, long of center of map, and distance radius in meters
  //returns a promise of data
  query = `SELECT * FROM locations WHERE ST_Distance(ST_SetSRID(ST_MakePoint(${long}, ${lat})::GEOGRAPHY, 4326), ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::GEOGRAPHY) <= ${radius}`;
  return bookshelf.knex.raw(query)
  // bookshelf.knex.raw(query).then(res => console.log(res)).catch(err => console.log(err));
};

module.exports = {
  getLocationsNear: getLocationsNear
};