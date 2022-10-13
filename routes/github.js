const express = require("express");
const githubModel = require("../model/github");
const githubtRouter = express.Router();



githubtRouter.get("/username/:name", async (req, res) => {
  try {
    const githubuser = await githubModel.find({ name: req.params.name });

    return res.status(200).send(githubuser);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = githubtRouter;