const express = require('express');
const { getAllUsers, createUser, getUserById, updateUser, deleteUser, patchUser } = require('../service/user.service');
const { isValidUserId, isValidUserBody } = require('../helper/validation');
const buildResponse = require('../helper/buildResponse');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAllUsers();

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.post('/', isValidUserBody, async (req, res) => {
  try {
    const { birth, city, age, name, surname } = req.body;
    const data = await createUser(birth, city, age, name, surname);

    buildResponse(res, 201, data);
  } catch (error) {
    buildResponse(res, 405, error.message);
  }
});

router.get('/:id', isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.put('/:id', isValidUserId, isValidUserBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { birth, city, age, name, surname } = req.body;
    const data = await updateUser(id, birth, city, age, name, surname);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.delete('/:id', isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.patch('/:id', isValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const data = await patchUser(id, userData);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = router;
