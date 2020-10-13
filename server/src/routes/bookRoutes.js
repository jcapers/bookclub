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
      title: req.body.title,
    });
    newList.save()
      .then(list => res.json(list))
      .catch(err => console.log(err))
  }).catch(err => {
    console.log(err);
  });

});

module.exports = router;