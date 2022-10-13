const express = require("express");
const githubtRouter = express.Router();
const { getAllUsers } = require("../controllers/github.controller");


githubtRouter.get("/username/:name", getAllUsers);

module.exports = githubtRouter;