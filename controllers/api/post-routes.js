const router = require("express").Router();
const { Post } = require("../../models");

//Get all posts
router.get("/", (req, res) => {
  Post.findAll()
    .then((postData) => {
      res.json(postData);
    })

    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

//Get post by ID
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((postData) => {
      if (!postData) {
        res.json({ message: "No post with that ID" });
      }
      res.json(postData);
    })

    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

//Create a post
router.post("/", (req, res) => {
  Post.create({
    title: req.params.title,
  })
    .then((newPostData) => res.json(newPostData))

    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

module.exports = router;
