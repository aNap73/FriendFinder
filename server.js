var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

var antfriends = require(path.join(__dirname,'./app/data/friends.js'))();
console.log(antfriends);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require(path.join(__dirname,"./app/routing/apiRoutes.js"))(app,antfriends);
require(path.join(__dirname,"./app/routing/htmlRoutes.js"))(app);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
