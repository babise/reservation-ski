const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const connectMongo = require("./config/mongo.config.js");
connectMongo();

app.use(express.json());
app.use(cors());

const postRouter = require("./src/routers/post.router.js");
const commentRouter = require("./src/routers/comment.router.js");
const bookingRouter = require("./src/routers/booking.router.js");
const shopRouter = require("./src/routers/shop.router.js");

const PREFIX_URL = "/api";

app.use(PREFIX_URL, postRouter);
app.use(PREFIX_URL, commentRouter);
app.use(PREFIX_URL, bookingRouter);
app.use(PREFIX_URL, shopRouter);

app.listen(port, () => {
	console.log(`Babi's api is listening on port ${port}`);
});
