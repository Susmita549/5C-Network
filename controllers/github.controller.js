
const githubModel = require("../model/github");

//For searching github user
const getAllUsers = async (req, res) => {
  try {
    const githubuser = await githubModel.find({ name: req.params.name });

    return res.status(200).send(githubuser);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

//For searching github user location
const getUserLocation = async (req, res) => {
    try {
      const githubuserlocation = await githubModel
        .find({ locatioin: req.params.location })
        
      return res.status(200).send(githubuserlocation);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
};

//For soft deleting a user
const githubuserdelete = async (req, res) => {
     try {
       const { id } = req.params;
       const githubuser = await githubModel.updateOne(
         { _id: id },
         { $set: { deleted: true } }
       );

       return res.status(200).send(JSON.stringify(githubuser));
     } catch (err) {
       return res.status(500).send({ message: err.message });
     }
}
//For updating a github user
const updateUser = async (req, res) => {
  try {
    const githube = await githubModel
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();

    return res.status(200).send(githube);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

//For sorting
const sortUser = async (req, res, next) => { 
    try {
      const githube = await githubModel.find().sort({ size: 1 });

      return res.status(200).send(githube);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
}
const sortCreated = async (req, res, next) => { 
    try {
      const githube = await githubModel.find().sort({ created_at: 1 });

      return res.status(200).send(githube);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
};
const sortUpdate = async (req, res, next) => {
    try {
      const githube = await githubModel.find().sort({ updated_at: 1 });

      return res.status(200).send(githube);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
};

module.exports = {
  getAllUsers,
  getUserLocation,
  githubuserdelete,
  updateUser,
  sortUser,
  sortCreated,
  sortUpdate,
};