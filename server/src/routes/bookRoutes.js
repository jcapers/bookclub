const express = require("express");

const config = require('../config/config');
const ReadList = require("../models/readListModel");
const User = require("../models/userModel")


/*
* Books API Router.
*
* POST /books/readlist/create
*/
const router = express.Router();

/*
* Reading List creation route
* POST /books/readlist/create
*/
router.post("/readlist/create", (req, res) => {
  // Check required fields exist
  if (!req.body.userID) {
    return res.status(400).json({ invalidList: `List create request malformed, userID: ${req.body.userID}` });
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
      .then(list => res.json({success: true, message: "Created reading list.", payload: list}))
      .catch(err => console.log(err))
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
    ReadList.findByIdAndUpdate(req.params.readlistID, { $push: {
      items: req.body
    }}).then(update => {
      return res.json({success: true, message: "Item added to reading list.", payload: update})
    })
  })
});

router.delete("/readlist/deleteItem/:readlistID", async (req, res) => {
  console.log(req.body)
  await ReadList.findByIdAndUpdate(req.params.readlistID, { $pull: {
    "items": { "bookTitle": req.body.bookTitle }
  }}, { safe: true, upsert: true }).then(update => {
    return res.json({success: true, message: "Item deleted from readling list.", payload: update})
  });
});

module.exports = router;