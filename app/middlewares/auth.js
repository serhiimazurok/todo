const jwt = require('jsonwebtoken');
const config = require('../config');
const userService = require('../services/user');

module.exports = async (ctx, next) => {
  const [, token] = ctx.get('Authorization').split(' ');

  try {
    const { id } = jwt.verify(token, config.JWT_SECRET);

    ctx.user = await userService.getUserById({ id });

    await next();
  } catch (err) {
    ctx.body = 'Invalid Token';
    ctx.status = 401;
  }
};
