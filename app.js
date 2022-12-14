const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
require('dotenv').config()
app.use(express.static('/root/rokko/dist')); // prod
app.use('/public', express.static('/root/rokko/public'));
// app.use('/', express.static('/public'));

app.get('/rss', (req, res) => {
  res.contentType('application/xml');
  res.sendFile(path.join(__dirname , 'public/data.rss'));
	
});
app.get('/test-episode', (req, res) => {
  // res.contentType('');
  res.sendFile(path.join(__dirname , 'public/rokko-test.mpeg'));
	
});
app.get('/cover', (req, res) => {
  // res.contentType('');
  res.sendFile(path.join(__dirname , 'public/alihan.jpg'));
	
});
const server = app.listen(process.env.PORT || 3310, () => {
  var port = server.address().port;
  console.log('Listening...' + port);
});
