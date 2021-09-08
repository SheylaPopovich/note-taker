const express = require('express');

const api = require('./routes/apiroutes.js');
const html = require('./routes/html');
const PORT = process.env.PORT || 3001;
// const deleteNotes = require('./public/assets/js/index');



const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.use(api);
app.use(html);



//attempting delete
// app.delete('/api/notes/:id', (req, res) => {
  
  


  
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);