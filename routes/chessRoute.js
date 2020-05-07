const route = require("express").Router();

route.get("/", async (req, res) => req.send("hello"));

module.exports = route;
