const express = require("express");
const app = express();
const port = 3000;

app.post("/api/vi/create_user", function (req, res) {
  data = {
    name: "",
    coins: "",
  };
  res.send(data);
});

app.post("/api/vi/create_game", function (req, res) {
  data = {
    players: [],
    decks: "",
  };
  res.send(data);
});

app.post("/api/vi/deal", function (req, res) {
  data = {
    id: "",
    coins: [],
  };
  res.send(data);
});

app.post("/api/vi/insurance", function (req, res) {
  data = {
    round_id: "",
    insurance: [],
  };
  res.send(data);
});

app.get("/v1/hit/:hand_id", (req, res) => {
  if (res.status === 200) res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
