const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", (req, res) => {
  if (req.session) {
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

module.exports = router;