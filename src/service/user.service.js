const {
  getAllUsersDB,
  createUserDB,
  getUserByIdDB,
} = require("../repository/user.repository");

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error("DB is empty");

  return data;
}

async function createUser(birth, city, age, name, surname) {
  const data = await createUserDB(birth, city, age, name, surname);
  if (!data.length) throw new Error("object doesn't created");

  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error("id not found");

  return data;
}

module.exports = { getAllUsers, createUser, getUserById };
