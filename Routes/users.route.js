const router = require("express").Router();
const {
  newUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../Controllers/users.controller");

router.get("/", getAllUsers);

router.get("/:userId", getUserById);

router.post("/", newUser);

router.put("/:userId", updateUser);

router.delete("/:userId", deleteUser);

module.exports = router;
