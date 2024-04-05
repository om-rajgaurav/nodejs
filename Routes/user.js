const express = require("express");
const router = express.Router();
const { handleGetAllUser, handleGetUserById, handleCreateUser, handleUpdateUser, handleDeleteUser } = require("../controllers/user");

router.route("/").get(handleGetAllUser).post(handleCreateUser)
router.route("/:id").get(handleGetUserById).patch(handleUpdateUser).delete(handleDeleteUser);

module.exports = router;
