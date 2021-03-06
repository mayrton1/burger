var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.resolve(__dirname,'public')));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");

var routes = require(path.resolve(__dirname,"./controllers/burgersController.js"));

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
