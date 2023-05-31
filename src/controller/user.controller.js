const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  patchUser,
} = require("../service/user.service");
const { isValidUserId, isValidUserBody } = require("../helper/validation");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAllUsers();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", isValidUserBody, async (req, res) => {
  try {
    const { birth, city, age, name, surname } = req.body;
    const data = await createUser(birth, city, age, name, surname);

    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

router.get("/:id", isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", isValidUserId, isValidUserBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { birth, city, age, name, surname } = req.body;
    const data = await updateUser(id, birth, city, age, name, surname);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const data = await patchUser(id, userData);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
