var express = require("express");
var app = express();

app.use(express.static("public"));

app.use("/dist/*.dist.js", (req, res) => {
	var file = req.params[0];
	res.sendFile(__dirname + `/projects/${file}/dist/${file}.dist.js`);
});

app.listen(9999);

console.log("Listening to port 9999");