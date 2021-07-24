const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
  Post.findAll()

    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render("homepage", { posts });
    })
    .catch((err) => {
      if (err) {
        res.json(err);
      }
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((userData) => {
    if (!userData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  });
});

module.exports = router;
