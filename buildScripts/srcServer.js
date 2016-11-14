import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';

import config from '../webpack.config.dev';

const PORT = 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
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
