const pool = require("../db");

async function getAllUsersDB() {
  const client = await pool.connect();

  const sql =
    "select * from users_info join users on users.info_id = users_info.id";
  const data = (await client.query(sql)).rows;

  return data;
}

async function createUserDB(birth, city, age, name, surname) {
  const client = await pool.connect();

  const sql1 =
    "insert into users_info (birth, city, age) values ($1, $2, $3) returning *";
  const data1 = (await client.query(sql1, [birth, city, age])).rows;

  const sql2 =
    "insert into users (name, surname, info_id) values ($1, $2, $3) returning *";
  const data2 = (await client.query(sql2, [name, surname, data1[0].id])).rows;

  return [{ ...data1[0], ...data2[0] }];
}

module.exports = { getAllUsersDB, createUserDB };
