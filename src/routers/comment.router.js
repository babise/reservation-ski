const express = require("express");
const CommentController = require("../controllers/comment.controller");
const router = express.Router();

router.post("/comments", CommentController.create);
router.get("/comments", CommentController.getAll);
router.get("/comments/:id", CommentController.getOne);
router.put("/comments/:id", CommentController.update);
router.delete("/comments/:id", CommentController.delete);

module.exports = router;
