const express = require('express');
const path = require('path');
const router = express.Router();
// const notesData = require('./public/db/db.json');


const fs = require('fs');

// get route for notes
// check readme

router.get('/notes', (req, res) => {
  //should read the `db.json` file and return all saved notes as JSON.
  // console.log("funciona")
  // return res.json(notesData);
  // res.json(path.join(__dirname, '../db/db.json'));
  const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(notesData);
});

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


router.post('/notes', (req,res) => {
  res.send('Its working!');
  console.log(req.body);
  fs.writeFile('db.json', req.body)
})


  module.exports = router;