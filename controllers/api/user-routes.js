const router = require("express").Router();
const { User } = require("../../models");

//Get all users
router.get("/", (req, res) => {
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

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((userData) => {
    if (!userData) {
      res.json({ message: "No user with that email" });
      return;
    }

    // const validPassword = userData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res.json({ message: "Incorrect Password" });
    //   return;
    // }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  });
});

//Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  res.status(404).end();
});

module.exports = router;
