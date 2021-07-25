const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", (req, res) => {
  if (req.session) {
    console.log(req.body);
    Comment.create({
      comment_content: req.body.comment_content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then((commentData) => res.json(commentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.get("/", (req, res) => {
  Comment.findAll()

    .then((data) => {
      res.json(data);
    })

    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
