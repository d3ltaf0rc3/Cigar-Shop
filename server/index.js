const express = require("express");
const connectToDB  = require("./config/database");
const expressConfig = require("./config/express");
const app = express();

expressConfig(app);
connectToDB();

app.listen(process.env.PORT, err => {
    if (err) throw err;
    console.log(`Server is running on port ${process.env.PORT}`);
});