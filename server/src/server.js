const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();
const { dbURI, serverPort } = require('./config/config');

// Setup body-parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(dbURI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(`MongoDB successfully connected at ${dbURI}`))
.catch(err => console.log(err));

// Default port to 4000 if not specified
const port = serverPort || 4000

app.listen(port, () => console.log(`Server is up on port: ${port} !`));
