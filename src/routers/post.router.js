const express = require("express");
const PostController = require("../controllers/post.controller");
const router = express.Router();

router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts/:id", PostController.update);
router.delete("/posts/:id", PostController.delete);
router.post("/posts", PostController.create);

module.exports = router;
