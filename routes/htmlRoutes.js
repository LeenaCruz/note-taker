const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
    res.send('La conexión ha sido correcta')

});

// router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
router.get('*', (req, res) => res.json("Works"));

module.exports = router;
