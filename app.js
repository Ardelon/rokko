const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
require('dotenv').config()
app.use(express.static('dist'));

app.get('', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/rss', (req, res) => {
  res.contentType('application/xml');
  res.sendFile(path.join(__dirname , 'public/data.rss'));
	
});
app.get('/test-episode', (req, res) => {
  // res.contentType('');
  res.sendFile(path.join(__dirname , 'public/rokko-test.mpeg'));
	
});
server.listen(process.env.PORT || 5000, () => console.log(`Server running on port 5000`));
// const server = app.listen(process.env.PORT || 5000, () => {
// 	var port = server.address().port;
// 	console.log('Listening...' + port);
// });
