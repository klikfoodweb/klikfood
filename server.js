const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//force https
app.set('trust proxy', true);

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
app.use(requireHTTPS);

//Static file declaration
app.use(express.static(path.join(__dirname, 'build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'build/index.html'));
  })
}

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})