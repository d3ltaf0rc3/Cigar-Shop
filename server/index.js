const express = require("express");
const connectToDB  = require("./config/database");
const expressConfig = require("./config/express");
const userRouter = require("./routes/user");
const app = express();

require("./models/User");
require("./models/Product");
expressConfig(app);
connectToDB();

app.use("/api", userRouter);

app.listen(process.env.PORT, err => {
    if (err) throw err;
    console.log(`Server is running on port ${process.env.PORT}`);
});