const Sequelize = require("sequelize");

const sequelize = new Sequelize("blog_db", "root", "LaptopWaterParis1027$", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
