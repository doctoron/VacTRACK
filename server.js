const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku) Production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "client/build")));
}

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/members", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Add routes, both API and view
// /myRoutesHere /api
app.use(routes);

// Build mode
// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});