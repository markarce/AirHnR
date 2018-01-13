const config = require('../config');
const knex = require('knex')({
  client: 'pg',
  connection: config.database_url
});
const bookshelf = require('bookshelf')(knex);

// const getListingsNear = (lat, long, radius = 3000) => {
//   //lat, long of center of map, and distance radius in meters
//   //returns a promise of data
//   let query = `SELECT locations.*, listings.* FROM locations, listings WHERE ST_Distance(ST_SetSRID(ST_MakePoint(${long}, ${lat})::geography, 4326), ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography) <= ${radius} AND listings.location_id = locations.id`;
//   return bookshelf.knex.raw(query).then(res => res.rows);
// };
const getListingsNear = (lat, long, radius = 3000) => {
  //lat, long of center of map, and distance radius in meters
  //returns a promise of data
  let query = `
    SELECT list.*, loc.*,
    (SELECT AVG(rev.stars) average_stars FROM location_reviews rev WHERE rev.location_id = loc.id),
    (SELECT COUNT(rev.*) review_count FROM location_reviews rev WHERE rev.location_id = loc.id)
    FROM locations loc, listings list WHERE loc.id = list.location_id
    AND ST_Distance(ST_SetSRID(ST_MakePoint(${long}, ${lat})::geography, 4326), 
    ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography) <= ${radius}
  `;
  return bookshelf.knex.raw(query).then(res => res.rows);
};

const getLocationsNear = (lat, long, radius = 3000) => {
  //lat, long of center of map, and distance radius in meters
  //returns a promise of data
  let query = `SELECT * FROM locations WHERE ST_Distance(ST_SetSRID(ST_MakePoint(${long}, ${lat})::geography, 4326), ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography) <= ${radius}`;
  return bookshelf.knex.raw(query).then(res => res.rows);
};

const getListingInfo = (listingId) => {
  let query = `SELECT listings.*, locations.*, users.* FROM listings, locations, users WHERE listings.id=${listingId} AND locations.id=listings.location_id AND users.id=listings.host_id`;
  return bookshelf.knex.raw(query).then(res => res.rows[0]);
};

const saveUserInDB = (user) => {
  return knex('users').insert(user);
}

const saveBookingInDB = (booking) => {
  console.log('booking', booking);
  console.log('type', typeof booking);
  return knex.insert(booking).into("bookings").then(function (result) {
    console.log('knex', result);
    return result;
  });
}

const getUserFromDB = (userEmail) => {
  return knex('users')
  .where({ email: userEmail})
  .then((rows) => {
    return rows[0];
  });
}

module.exports = {
  getListingsNear: getListingsNear,
  getLocationsNear: getLocationsNear,
  getListingInfo: getListingInfo,
  saveUserInDB: saveUserInDB,
  getUserFromDB: getUserFromDB,
  saveBookingInDB: saveBookingInDB
};