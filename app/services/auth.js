const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
  sign: async ({ user }) => jwt.sign(user, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN,
  }),
};
