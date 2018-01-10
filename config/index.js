require('dotenv').config();



module.exports = {
  serverPort: process.env.PORT,
  googleKey: process.env.GOOGLE_GEOCODING_KEY,
  database_url: process.env.DATABASE_URI
};

// console.log(module.exports);