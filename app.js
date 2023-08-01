const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
require("dotenv").config();
// app.use(express.static("dist"));
// app.use(express.static("static"));
app.use("/public", express.static(__dirname + "/dist/"));
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
	// res.contentType('');
	res.sendFile(path.join(__dirname, "dist/index.html"));
});
const server = app.listen(process.env.PORT || 3310, () => {
	var port = server.address().port;
	console.log("Listening..." + port);
});
