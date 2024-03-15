const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  //   console.log("Hello World");
  res.json({ message: "Message from backend" });
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
