const express = require("express");

const Bookshelf = require("../models/bookshelfModel")
const ReadList = require("../models/readListModel");
const User = require("../models/userModel")


/*
* Books API Router.
*
* POST /books/readlist/create
*/
const router = express.Router();


/*
* Create a book shelf.
* POST /books/shelf/create
*/
router.post("/shelf/create", (req, res) => {
  // Check required fields exist
  if (!req.body.userID) {
    return res.status(400).json({ invalid: `Shelf create request malformed, userID: ${req.body.userID}` });
  } else if (!req.body.shelfName) {
    return res.status(400).json({ noTitle: "No shelf name was supplied." });
  }

  User.findById(req.body.userID).then(user => {
    // Create reading list
    const newShelf = new Bookshelf({
      userID: user._id,
      createdBy: user.displayName,
      shelfName: req.body.shelfName,
    });
    newShelf.save()
      .then(list => res.json({success: true, message: `Created bookshelf: ${newShelf.shelfName}.`, payload: list}))
      .catch(err => console.log(err))
  });
});

/*
* Delete a book shelf.
* DELETE /books/shelf/delete/:shelfID
*/
router.delete("/shelf/delete/:shelfID", (req, res) => {
  Bookshelf.findByIdAndDelete(req.params.shelfID).then(shelf => {
    return res.json({
      success: true,
      message: `Deleted shelf: ${req.params.shelfID}`,
      payload: shelf
    });
  });
});

/*
* Get all bookshelves for user.
* GET /books/shelf/:userID
*/
router.get("/shelf/:userID", (req, res) => {
  // Check required fields exist
  if (!req.params.userID) {
    return res.status(400).json({ noUserID: ":userID param required to find reading lists." });
  }

  Bookshelf.find({userID: req.params.userID}).then(shelves => {
    if (shelves.length < 1) {
      return res.status(404).json({notFound: "Did not find any bookshelves."});
    }
    return res.json({success: true, message: "Retrieved user's bookshelves.", payload: shelves})
  });
});

/*
* Adds books to bookshelves in :shelfID.
* PUT /books/shelf/addBook/:readlistID
*/
router.put("/shelf/addBook/:shelfID", (req, res) => {
  Bookshelf.findById(req.params.shelfID).then(shelf => {
    const bookExists = shelf.books.some(book => {
      return book.bookTitle === req.body.bookTitle;
    });
    if (bookExists) {
      return res.status(400).json({ bookExists: "Book already exists in your shelf." })
    }

    // Item doesn't exist so update
    Bookshelf.findByIdAndUpdate(req.params.shelfID, { 
      $push: {
        books: req.body,
      },
      updateDate: Date.now()
    }).then(update => {
      return res.json({success: true, message: `Book ${req.body.bookTitle} added to bookshelf.`, payload: update})
    })
  })
});

/*
* Deletes books from bookshelf in :shelfID
* DELETE /books/shelf/deleteBook/:shelfID
*/
router.delete("/shelf/deleteBook/:shelfID", async (req, res) => {
  await Bookshelf.findByIdAndUpdate(req.params.shelfID, { 
    $pull: {
      "books": { "bookTitle": req.body.bookTitle }
    },
    updateDate: Date.now()
  }, { safe: true }).then(update => {
    return res.json({success: true, message: `Book ${req.body.bookTitle} removed from bookshelf.`, payload: update})
  });
});

/*
* Reading List creation route
* POST /books/readlist/create
*/
router.post("/readlist/create", (req, res) => {
  // Check required fields exist
  if (!req.body.userID) {
    return res.status(400).json({ invalid: `List create request malformed, userID: ${req.body.userID}` });
  } else if (!req.body.title) {
    return res.status(400).json({ noTitle: "Title for list is required." });
  }

  User.findById(req.body.userID).then(user => {
    // Create reading list
    const newList = new ReadList({
      userID: user._id,
      createdBy: user.displayName,
      title: req.body.title,
    });
    newList.save()
      .then(list => res.json({success: true, message: `Created reading list: ${newList.title}`, payload: list}))
      .catch(err => console.log(err))
  });
});

/*
* Delete a reading list.
* DELETE /books/readlist/delete/:readlistID
*/
router.delete("/readlist/delete/:readlistID", (req, res) => {
  ReadList.findByIdAndDelete(req.params.readlistID).then(list => {
    return res.json({
      success: true,
      message: `Deleted list: ${req.params.readlistID}`,
      payload: list
    });
  });
});


/*
* Get all reading lists for user
* GET /books/readlist/:userID
*/
router.get("/readlist/:userID", (req, res) => {
  // Check required fields exist
  if (!req.params.userID) {
    return res.status(400).json({ noUserID: ":userID param required to find reading lists." });
  }

  ReadList.find({userID: req.params.userID}).then(lists => {
    if (lists.length < 1) {
      return res.status(404).json({notFound: "Did not find any reading lists."});
    }
    return res.json({success: true, message: "Retrieved user's readling lists.", payload: lists})
  });

});

/*
* Adds item to reading list for :readlistID.
* PUT /books/readlist/addItem/:readlistID
*/
router.put("/readlist/addItem/:readlistID", (req, res) => {
  ReadList.findById(req.params.readlistID).then(list => {
    const itemExists = list.items.some(item => {
      return item.bookTitle === req.body.bookTitle;
    });
    if (itemExists) {
      return res.status(400).json({ itemExists: "Item already exists in list." })
    }

    // Item doesn't exist so update
    ReadList.findByIdAndUpdate(req.params.readlistID, { 
      $push: {
        items: req.body,
      },
      updateDate: Date.now()
    }).then(update => {
      return res.json({success: true, message: `Item ${req.body.bookTitle} added to reading list.`, payload: update})
    })
  })
});

/*
* Deletes an item from a reading list :readlistID
* DELETE /books/readlist/deleteItem/:readlistID
*/
router.delete("/readlist/deleteItem/:readlistID", async (req, res) => {
  await ReadList.findByIdAndUpdate(req.params.readlistID, { 
    $pull: {
      "items": { "bookTitle": req.body.bookTitle }
    },
    updateDate: Date.now()
  }, { safe: true }).then(update => {
    return res.json({success: true, message: `Item ${req.body.bookTitle} deleted from reading list.`, payload: update})
  });
});

module.exports = router;