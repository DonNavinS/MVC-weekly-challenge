const router = require("express").Router();
const { Post } = require("../models");

router.get("/", (req, res) => {
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

module.exports = router;
