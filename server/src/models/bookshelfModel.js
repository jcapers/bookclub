const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/*******************************************************************************
** Book Model for MongoDB.
** 
** Represents a user's bookshelf.
** Schema:
**    userID: User's ID reference
**    createdBy: User's display name
**    shelfName: Name of bookshelf
**    books: [] list of books in this bookshelf
**      - bookTitle: Name of book on reading list
**      - imageURI: Link to book image, currently from the internet.
**      - comment: User comment
**      - tags: [] list of tags user associates with book
**    createdDate: Datetime of list creation
**    updateDate: Datetime of list update
*******************************************************************************/

const bookshelfSchema = new Schema({
  userID: {
    type: Schema.ObjectId,
    ref: "users",
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  shelfName: {
    type: String,
    required: true,
    unique: true
  },
  books: [
    {
      bookTitle: {
        type: String,
        required: true,
      },
      imageURI: {
        type: String,
        default: ""
      },
      comment: {
        type: String,
        default: ""
      },
      tags: [
        {
          type: String
        }
      ]
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

module.exports = Bookshelf = mongoose.model("bookshelf", bookshelfSchema);