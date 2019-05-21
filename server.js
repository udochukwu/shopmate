const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, 'dist')));

// send the user to index html page inspite of the url
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log('server started!');
});
