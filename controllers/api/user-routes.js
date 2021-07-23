const router = require("express").Router();
const { User } = require("../../models");

//Get all users
router.get("/", (req, res) => {
  console.log("working");
  User.findAll()

    .then((userData) => res.json(userData))

    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

//Get user by ID
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })

    .then((userData) => {
      if (!userData) {
        res.json({ message: "No user with that ID" });
      }
      res.json(userData);
    })

    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

//Create a user
router.post("/", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.username);
  console.log(req.body.password);
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
    .then((newUserData) => res.json(newUserData))

    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

module.exports = router;
