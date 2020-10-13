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
    console.log(user);
    const newList = new ReadList({
      userID: user._id,
      createdBy: user.displayName,
      title: req.body.title,
    });
    newList.save()
      .then(list => res.json(list))
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
    if (!lists) {
      return res.status(404).json({notFound: "Did not find any reading lists."});
    }
    return res.json({success: true, payload: lists})
  });
});

router.put("/readlist/update/:readlistID", (req, res) => {
  console.log(req.body);
  ReadList.findByIdAndUpdate(req.params.readlistID, { $push: req.body }).then(newList => {
    console.log(newList);
    return res.json(newList);
  });
});

module.exports = router;