const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

const mongoDbAtlas = process.env.ATLAS_URI;

mongoose.connect(mongoDbAtlas, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.listen(port, () => {
  if (db) {
    console.log("connected to db");
  }
  console.log(`Server is running on port: ${port}`);
});
