const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Importing Cloud MongoDB Key
const db = require("./config/keys").mongoURI;

//Connecting to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

//Importing Route Files
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

app.get("/", (req, res) => {
  res.send("Index");
});

//Registering Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
