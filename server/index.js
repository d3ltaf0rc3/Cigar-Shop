const express = require("express");
const connectToDB  = require("./config/database");
const expressConfig = require("./config/express");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const blogRouter = require("./routes/blog");
const app = express();

require("./models/User");
require("./models/Product");
require("./models/Blog");
expressConfig(app);
connectToDB();

app.use("/api", userRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);

app.listen(process.env.PORT, err => {
    if (err) throw err;
    console.log(`Server is running on port ${process.env.PORT}`);
});