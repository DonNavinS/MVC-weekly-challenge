const router = require("express").Router();
const { Post } = require("../models");

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
  res.render("login");
});

module.exports = router;
