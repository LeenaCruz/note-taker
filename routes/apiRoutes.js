const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
// const notesData = require('./public/db/db.json');

const PORT = 5500;
const fs = require('fs');
const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
// get route for notes
// check readme

router.get('/api/notes', (req, res) => {
  //should read the `db.json` file and return all saved notes as JSON.
  // console.log("funciona")
  // return res.json(notesData);
  // res.json(path.join(__dirname, '../db/db.json'));
  res.json(notesData);
});

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


router.post('/api/notes', (req,res) => {
  fs.writeFile('db.json', res)
})





  module.exports = router;