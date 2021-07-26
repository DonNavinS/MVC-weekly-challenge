const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "post_url", "post_content", "title", "createdAt"],

    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_content",
          "post_id",
          "user_id",
          "createdAt",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));
      //   console.log(posts);
      res.render("dashboard", { posts: posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.body.id,
    },
    attributes: ["id", "post_url", "post_content", "title", "createdAt"],
  })
    .then((data) => {
      const postData = data.get({ plain: true });
      console.log(postData);
      res.render("edit", {
        post: postData,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
