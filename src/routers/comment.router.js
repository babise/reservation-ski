const express = require("express");
const CommentController = require("../controllers/comment.controller");
const router = express.Router();

router.post("/comments", CommentController.create);

module.exports = router;
