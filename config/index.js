require('dotenv').config();

module.exports = {
  serverPort: process.env.PORT,
  googleKey: process.env.GOOGLE_GEOCODING_KEY,
  database_url: process.env.DATABASE_URL,
  heroku_db_host: process.env.HEROKU_DB_HOST,
  heroku_db_user: process.env.HEROKU_DB_USER,
  heroku_db_password: process.env.HEROKU_DB_PASS,
  heroku_db_db: process.env.HEROKU_PG_DB
};

// console.log(module.exports);