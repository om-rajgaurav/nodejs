const User = require("../models/user");

async function handleGetAllUser(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "user not found" });
  return res.json(user);
}

async function handleUpdateUser(req, res) {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body);
  if (!user) return res.status(404).json({ message: "user not found" });
  return res.json({ message: "user updated" });
}

async function handleDeleteUser(req, res) {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  if (!user) return res.status(404).json({ message: "user not found" });
  return res.json({ message: "User deleted" });
}

async function handleCreateUser(req, res) {
  const body = req.body;
  if (!body || !body.first_name || !body.last_name || !body.email) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields" });
  }
  const newUser = new User(body);
  const savedUser = await newUser.save();
  return res.status(201).json(savedUser._id);
}

module.exports = {
  handleGetAllUser,
  handleGetUserById,
  handleDeleteUser,
  handleCreateUser,
  handleUpdateUser,
};
