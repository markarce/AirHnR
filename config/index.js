require('dotenv').config();



module.exports = {
  serverPort: process.env.PORT,
  googleKey: process.env.GOOGLE_GEOCODING_KEY,
  database_url: process.env.DATABASE_URI,
  database_name: process.env.DB_NAME || '/airhnr'
};

// console.log(module.exports);