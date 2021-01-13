const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
global._ = require("lodash");
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
const routes = require("./routes/index");

app.use("/api/v1/", routes);

app.listen(4000, function(){
    console.log("app is running on port 4000")
})


module.exports = app;