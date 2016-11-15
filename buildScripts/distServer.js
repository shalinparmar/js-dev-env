import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const PORT = 3000;

const app = express();

app.use(compression());
// For production serve static files from dist directory.
app.use(express.static('dist'));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
   // Hard coded data.
   res.json([
      { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
      { "id": 2, "firstName": "Kep", "lastName": "Talkh", "email": "kep@gmail.com" },
      { "id": 3, "firstName": "Ted", "lastName": "Token", "email": "ted@gmail.com" }
   ]);
});

/* eslint-disable no-console */

app.listen(PORT, (err) => {
   if(err) {
      console.log(err);
   } else {
      open('http://localhost:' + PORT);
   }
});
