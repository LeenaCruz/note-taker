const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
  const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(notesData);
});

router.post('/notes', (req,res) => {
//Writes/Append the note data into the db.json file.
  fs.appendFileSync('./db/db.json', JSON.stringify(req.body))
 
})


  module.exports = router;