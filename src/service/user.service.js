const {
  getAllUsersDB,
  createUserDB,
  getUserByIdDB,
  updateUserDB,
  deleteUserDB,
  patchUserDB,
} = require("../repository/user.repository");
const ExceptionType = require("../exception/exception");

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(ExceptionType.DB_USER_GET);

  return data;
}

async function createUser(birth, city, age, name, surname) {
  const data = await createUserDB(birth, city, age, name, surname);

  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_USER_GET_BY_ID);

  return data;
}

async function updateUser(id, birth, city, age, name, surname) {
  const data = await updateUserDB(id, birth, city, age, name, surname);

  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDB(id);

  return data;
}

async function patchUser(id, userData) {
  const data = await patchUserDB(id, userData);

  return data;
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  patchUser,
};
