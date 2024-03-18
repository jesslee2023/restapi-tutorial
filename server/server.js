const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let fakeDB = { message: null };

// const logger = (req, res, next) => {
//   console.log("Logging route", req.originalUrl);
//   next();
// };

// app.use(logger);

app.get("/", (req, res) => {
  try {
    res.json(fakeDB);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    fakeDB.message.push(data.error);
    res.send("Hello World");
  } catch (error) {
    console.log("This is my error message", error);
  }
});

app.put("/", (req, res) => {
  try {
    const data = req.body;
    const message = data.message;
    const username = data.username;
    console.log(message, username);
    fakeDB.message[0] = data.message;
    res.send("Overwritten");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/", (req, res) => {
  fakeDB.message = [];
  res.send("Deleted");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
