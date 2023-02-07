const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const connectMongo = require("./config/mongo.config.js");
connectMongo();

app.use(express.json());

const postRouter = require("./src/routers/post.router.js");
const commentRouter = require("./src/routers/comment.router.js");
const bookingRouter = require("./src/routers/booking.router.js");

const PREFIX_URL = "/api";

app.use(PREFIX_URL, postRouter);
app.use(PREFIX_URL, commentRouter);
app.use(PREFIX_URL, bookingRouter);

app.listen(port, () => {
	console.log(`Babi's api is listening on port ${port}`);
});
