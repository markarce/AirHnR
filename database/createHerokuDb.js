// This script will set up and configure the database on Heroku.
// Run this script from the shell with "npm run create-heroku-db"
// Have the following key/val pairs in your .env file:
// HEROKU_DB_HOST=<YOUR_HEROKU_DB_URL>
// HEROKU_DB_USER=<YOUR_HEROKU_DB_USER_NAME>
// HEROKU_DB_PASS=<YOUR_HEROKU_DB PASSWORD>
// HEROKU_PG_DB=<YOUR_HEROKU_DB_NAME>

const pg = require('pg');
pg.defaults.ssl = true;
const config = require('../config');
const data = require('./data');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: config.heroku_db_host,
    user: config.heroku_db_user,
    password: config.heroku_db_password,
    database: config.heroku_db_db
  }
});
const bookshelf = require('bookshelf')(knex);

drop = (tableName) => {
  console.log(`DROPPING TABLE: ${tableName}`)
  return knex.schema.dropTableIfExists(tableName);
};

createUsers = () => {
  console.log('CREATING TABLE: users')
  return knex.schema.createTableIfNotExists('users', table => {
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
    table.string('phone_number');
    table.string('credit_card_number');
    table.string('address_street');
    table.string('address_city');
    table.string('address_region');
    table.string('address_postal_code');
    table.boolean('is_host');
  });
};

createLocations = () => {
  console.log('CREATING TABLE: locations')
  return knex.schema.createTableIfNotExists('locations', table => {
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
  });
};

createListings = () => {
  console.log('CREATING TABLE: listings')
  return knex.schema.createTableIfNotExists('listings', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table.date('start_date');
    table.date('end_date');
    table.float('price');
    table.float('fee_service');
    table.float('fee_cleaning');
    table.integer('location_id');
    table.foreign('location_id').references('locations.id');
    table.integer('host_id');
    table.foreign('host_id').references('users.id');
  });
};

createBookings = () => {
  console.log('CREATING TABLE: bookings')  
  return knex.schema.createTableIfNotExists('bookings', table => {
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
  });
};

createFavorites = () => {
  console.log('CREATING TABLE: favorites')
  return knex.schema.createTableIfNotExists('favorites', table => {
    table.increments('id').primary();
    table.timestamps(true, true);
    table.integer('location_id');
    table.foreign('location_id').references('locations.id');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
  });
};

createLocationReviews = () => {
  console.log('CREATING TABLE: location_reviews')
  return knex.schema.createTableIfNotExists('location_reviews', table => {
    table.increments('id').primary();
    table.string('tagline');    
    table.string('review_text', 2000);
    table.timestamps(true, true);
    table.integer('stars');
    table.integer('location_id');
    table.foreign('location_id').references('locations.id');
    table.integer('reviewer_id');
    table.foreign('reviewer_id').references('users.id');
  });
};

createHostReviews = () => {
  console.log('CREATING TABLE: host_reviews')
  return knex.schema.createTableIfNotExists('host_reviews', table => {
    table.increments('id').primary();
    table.string('tagline');    
    table.string('review_text', 2000);
    table.timestamps(true, true);
    table.integer('stars');
    table.integer('host_id');
    table.foreign('host_id').references('users.id');
    table.integer('reviewer_id');
    table.foreign('reviewer_id').references('users.id');
  });
};

createGuestReviews = () => {
  console.log('CREATING TABLE: guest_reviews')
  return knex.schema.createTableIfNotExists('guest_reviews', table => {
    table.increments('id').primary();
    table.string('tagline');
    table.string('review_text', 2000);
    table.timestamps(true, true);
    table.integer('stars');
    table.integer('guest_id');
    table.foreign('guest_id').references('users.id');
    table.integer('reviewer_id');
    table.foreign('reviewer_id').references('users.id');
  });
};

drop('users')
  .then(() => {
  return createUsers();
}).then(() => {
  return knex('users').insert(data.users);
}).then(() => {
  return drop('locations');
}).then(() => {
  return createLocations();
}).then(() => {
  return knex('locations').insert(data.locations);
}).then(() => {
  return drop('listings');
}).then(() => {
  return createListings();
}).then(() => {
  return knex('listings').insert(data.listings);
}).then(() => {
  return drop('bookings');
}).then(() => {
  return createBookings();
}).then(() => {
  return knex('bookings').insert(data.bookings);
}).then(() => {
  return drop('favorites');
}).then(() => {
  return createFavorites();
}).then(() => {
  return knex('favorites').insert(data.favorites);
}).then(() => {
  return drop('location_reviews');
}).then(() => {
  return createLocationReviews();
}).then(() => {
  return knex('location_reviews').insert(data.location_reviews);
}).then(() => {
  return drop('host_reviews');
}).then(() => {
  return createHostReviews();
}).then(() => {
  return knex('host_reviews').insert(data.host_reviews);
}).then(() => {
  return drop('guest_reviews');
}).then(() => {
  return createGuestReviews();
}).then(() => {
  return knex('guest_reviews').insert(data.guest_reviews);
}).then(() => {
  return bookshelf.knex.raw('CREATE EXTENSION IF NOT EXISTS Postgis');
}).then(done => {
  console.log('DONE');
  process.exit();
}).catch(err => {
  console.log('ERROR CREATING DB:');
  console.log(err);
  process.exit();
});
