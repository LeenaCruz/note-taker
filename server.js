const express = require('express');
const app = express();
const PORT = 5500;
const fs = require('fs');

// Middleware JSON url encoder
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(express.static('public'));


// app.get('/notes', (req,res) =>  {
//   res.sendFile(path.join(__dirname, 'notes.html'));
//   res.send('La conexión ha sido correcta')
      
//   });

// app.get('*', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));


// app.use('/api', require('./routes/api.routes'));
app.use('/', require('./routes/htmlRoutes'))
// app.get('/api/notes', (req,res) => res.json(notes));


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
  