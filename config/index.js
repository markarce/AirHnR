require('dotenv').config();



module.exports = {
  serverPort: process.env.PORT,
  googleKey: process.env.GOOGLE_GEOCODING_KEY
};
