const express = require("express");
const app = express();
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require("path");

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

app.use(require("./controllers"));

app.get("/", (req, res) => {
  res.json({ message: "working" });
});
