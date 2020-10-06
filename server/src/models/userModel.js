const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/*******************************************************************************
** User Model for MongoDB.
** 
** Represents a User of the app.
** Schema:
**    name: User's Name
**    displayName: User's Display Name
**    email: User's email address for registration/login
**    password: User's password - hashed.
**    createdDate: Datetime of user creation.
**    updateDate: Datetime of user details update.
*******************************************************************************/

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", userSchema);