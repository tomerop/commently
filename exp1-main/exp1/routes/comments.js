const express = require("express");
const { validate, Comment } = require("../Models/comments");
const router = express.Router();
const auth = require("../middlewares/auth");

//GET ALL ANIMALS
router.get("/", async (req, res) => {
  const comments = await Comment.find().sort("name").select("name body -_id");
  res.send(comments);
});

// GET BY ID
router.get("/:id", async (req, res) => {
  //res.send(`localhost:${port}//${req.params.id}?${'email'}=${req.query['email']}`)
  const comment = await Comment.findById(req.params.id);
  if (!comment) res.status(400).send("this id is not valid ");
  res.send(comment);
});

//ADD NEW ANIMAL
router.post("/",auth, async (req, res) => {
  const results = validate(req.body);
  if (results.error) {
    // bad REQUEST 400
    res.status(400).send(results.error.details[0].message);
    return;
  }

  let comment = new Comment({
    name: req.body.name,
    body: req.body.body
  });
  comment = await comment.save();
  res.send(comment);
});

router.put("/:id", async (req, res) => {
  // search the comment
  const { error } = validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const comment = await Comment.findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
      body: req.body.body
    },
    new: true,
  });

  if (!comment) {
    res.status(400).send("this comment does not exist");
    return;
  }
  res.send(comment);
});

//DELETE
router.delete("/:id", async (req, res) => {
  const comment = await Comment.findByIdAndRemove(req.params.id);
  if (!comment) {
    res.status(400).send("this comment does not exist");
    return;
  }
  res.send(true);
});

module.exports = router;
