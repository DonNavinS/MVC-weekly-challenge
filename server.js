const express = require("express");
const app = express();
const sequelize = require("./config/connection");

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

app.use(require("./controllers"));

app.get("/", (req, res) => {
  res.json({ message: "working" });
});
