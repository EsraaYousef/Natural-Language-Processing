const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const mockAPIRes = require("./mockAPI.js");

// API
let baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
console.log(`Your API key is ${process.env.API_KEY}`);
const apiKey = process.env.API_KEY;

//app
const app = express();
app.use(express.static("dist"));

//cors
const cors = require("cors");
app.use(cors());

//bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Determine Port
app.listen(8081, function () {
  console.log("App listening on port 8081!");
});

//POST request
app.post("/newData", async (req, res) => {
  const getSentiment = await fetch(
    `${baseURL}${apiKey}&lang=auto&url=${req.body.formText}`,
    {
      method: "POST",
    }
  );
  try {
    const data = await getSentiment.json();
    console.log(getSentiment, data);
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});
