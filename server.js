// Dependencies
const express = require("express");

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Recieve static files
app.use(express.static('public'));

// Set up Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up our express handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

// Importing our routes
const routes = require("./controllers/burgers_controller.js");

// Giving the routes to the express server
app.use(routes);

// Starting our server
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT)
});