const knex = require("../utils/knex");
const getUserById = async({ id }) => {
  const user = await knex('users')
    .select('id', 'fullName')
    .where({ id })
    .first();

  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }

  return user;
}

module.exports = {
  getUserById,
};