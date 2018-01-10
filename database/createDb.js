const config = require('../config');
const data = require('./data');
const fs = require('fs');
const knex = require('knex')({
  client: 'pg',
  connection: config.database_url + '/airhnr'
});
// const bookshelf = require('bookshelf')(knex);

knex.schema
  .createTable('users', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table.string('username');
    table.string('password');
    table.string('first_name');
    table.string('last_name');
    table.date('account_created');
    table.string('email');
    table.string('about_me', 1000);
    table.string('avatar_url', 1000);
    table.string('credit_card_number');
    table.string('address_street');
    table.string('address_city');
    table.string('address_region');
    table.string('address_postal_code');
    table.boolean('is_host');
  }).then(() => { });

knex.schema
  .createTable('locations', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table.string('name');
    table.string('tagline', 1000);
    table.string('description', 3000);
    table.string('address_street');
    table.string('address_city');
    table.string('address_region');
    table.string('address_postal_code');
    table.float('latitude');
    table.float('longitude');
    table.string('image_url', 1000);
    table.string('room_type');
    table.integer('max_guests');
    table.integer('beds');
    table.integer('bathrooms');
    table.boolean('cancellation');
    table.json('amenities');
    table.json('house_rules');
    table.integer('host_id');
    table.foreign('host_id').references('users.id');
  }).then(() => { });

knex.schema
  .createTable('listings', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table.date('start_date');
    table.date('end_date');
    table.float('price');
    table.integer('location_id');
    table.foreign('location_id').references('locations.id');
    table.integer('host_id');
    table.foreign('host_id').references('users.id');
  }).then(() => { });
  
  knex.schema
  .createTable('bookings', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table.float('price');
    table.float('fee_service');
    table.float('fee_cleaning');
    table.float('tax');
    table.float('total');
    table.date('start_date');
    table.date('end_date');
    table.integer('number_of_nights');
    table.integer('num_guests');
    table.integer('listing_id');
    table.foreign('listing_id').references('listings.id');
    table.integer('location_id');
    table.foreign('location_id').references('locations.id');
    table.integer('guest_id');
    table.foreign('guest_id').references('users.id');
    table.integer('host_id');
    table.foreign('host_id').references('users.id');
  }).then(() => { });

knex.schema
  .createTable('favorites', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table.integer('location_id');
    table.foreign('location_id').references('locations.id');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
  }).then(() => { });

knex.schema
  .createTable('location_reviews', table => {
    table.increments('id').primary();
    table.string('review_text', 2000);
    table.timestamps(true, true);
    table.integer('stars');
    table.integer('location_id');
    table.foreign('location_id').references('locations.id');
    table.integer('reviewer_id');
    table.foreign('reviewer_id').references('users.id');
  }).then(() => { });

knex.schema
  .createTable('host_reviews', table => {
    table.increments('id').primary();
    table.string('review_text', 2000);
    table.timestamps(true, true);
    table.integer('stars');
    table.integer('host_id');
    table.foreign('host_id').references('users.id');
    table.integer('reviewer_id');
    table.foreign('reviewer_id').references('users.id');
  }).then(() => { });

knex.schema
  .createTable('guest_reviews', table => {
    table.increments('id').primary();
    table.string('review_text', 2000);
    table.timestamps(true, true);
    table.integer('stars');
    table.integer('guest_id');
    table.foreign('guest_id').references('users.id');
    table.integer('reviewer_id');
    table.foreign('reviewer_id').references('users.id');
  }).then(() => {});


// knex('listings').insert([
//   {
//     beds: 18,
//     address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
//     name: "Really, really white house",
//     room_type: "Single Room",
//     image_url: "https://timedotcom.files.wordpress.com/2016/08/whitehousevalue-re-97765250.jpg",
//     latitude: 38.896158,
//     longitude: -77.037139,
//     bathrooms: 1,
//     max_guests: 2,
//     tagline: "The summer white house",
//     // description: "It's no Mar-a-lago, but it's pretty great. The White House is the official residence and workplace of the President of the United States. It is located at 1600 Pennsylvania Avenue NW in Washington, D.C., and has been the residence of every U.S. president since John Adams in 1800. ",
//     amenities: {
//       "wifi": true,
//       "kitchen": true,
//       "hotTub": true,
//       "pool": true,

//     },
//     house_rules: {
//       "pets": true,
//       "smoking": false,
//       "checkIn": "01/20/2017",
//       "checkOut": "01/19/2021"