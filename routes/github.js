const express = require("express");
const githubtRouter = express.Router();
const {
  getAllUsers,
  getUserLocation,
  githubuserdelete,
  updateUser,
  sortUser,
  sortCreated,
  sortUpdate,
} = require("../controllers/github.controller");


githubtRouter.get("/username/:name", getAllUsers);
githubtRouter.get("/location/:location",getUserLocation);
githubtRouter.delete("delete/:id", githubuserdelete);
githubtRouter.patch("/update/:id", updateUser);
githubtRouter.get("/sort/size", sortUser);
githubtRouter.get("/sort/created", sortCreated);
githubtRouter.get("/sort/updated", sortUpdate);

module.exports = githubtRouter;