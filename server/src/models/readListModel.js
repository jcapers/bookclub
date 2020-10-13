const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/*******************************************************************************
** Reading List Model for MongoDB.
** 
** Represents reading lists created by users.
** Schema:
**    userID: User's ID reference
**    title: Reading list's title
**    items: [] list of reading items.
**      - bookTitle: Name of book on reading list
**      - comment: User comment
**      - read: Boolean true if read, false otherwise
**    createdDate: Datetime of list creation
**    updateDate: Datetime of list update
*******************************************************************************/

const readListSchema = new Schema({
  userID: {
    type: Schema.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  items: [
    {
      bookTitle: {
        type: String,
        required: true
      },
      comment: {
        type: String
      },
      read: {
        type: Boolean,
        default: false
      }
    }
  ],
  createdDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = ReadList = mongoose.model("readLists", readListSchema);