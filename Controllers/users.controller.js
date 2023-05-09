const { UsersModel } = require("../Utils/db.config");

function newUser(req, res) {
  const bData = { name: req.body.name, email: req.body.email };
  UsersModel.create(bData)
    .then((user) => {
      res.send({ message: "User created successfully", user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ errors: err.errors?.map((er) => er.message) });
    });
}

function getUserById(req, res) {
  UsersModel.findByPk(req.params.userId)
    .then((user) => {
      if (user) {
        res.send({
          message: "User fetched successfully",
          user,
        });
      } else {
        res
          .status(404)
          .send({ message: "Couldn't find user with id " + req.params.userId });
      }
    })
    .catch((err) => {
      res.status(500).send({ errors: err.errors?.map((er) => er.message) });
    });
}

function getAllUsers(req, res) {
  UsersModel.findAll()
    .then((users) => {
      res.send({ message: "all users fetched successfully", users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ errors: err.errors?.map((er) => er.message) });
    });
}

function updateUser(req, res) {
  UsersModel.findOne({ where: { id: req.params.userId } }).then((user) => {
    if (user) {
      user
        .update({ name: req.body.name, email: req.body.email })
        .then((updatedUser) => {
          res.send({
            message: "User Updated successfully",
            updatedUser,
          });
        })
        .catch((err) => {
          res.status(500).send({ errors: err.errors?.map((er) => er.message) });
        });
    } else {
      res
        .status(404)
        .send({ message: "Couldn't find user with id " + req.params.userId });
    }
  });
}
function deleteUser(req, res) {
  UsersModel.findOne({ where: { id: req.params.userId } }).then((user) => {
    if (user) {
      user
        .destroy()
        .then((deletedUser) => {
          res.send({
            message: "User Deleted successfully",
            deletedUser,
          });
        })
        .catch((err) => {
          res.status(500).send({ errors: err.errors?.map((er) => er.message) });
        });
    } else {
      res
        .status(404)
        .send({ message: "Couldn't find user with id " + req.params.userId });
    }
  });
}

module.exports = { newUser, getAllUsers, getUserById, updateUser, deleteUser };
