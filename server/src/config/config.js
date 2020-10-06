const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  dbURI: process.env.MONGO_URI,
  serverPort: process.env.SERVER_PORT,
  secretOrKey: process.env.SECRET_KEY
};
