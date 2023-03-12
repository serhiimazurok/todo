const userService = require('../services/user');
const authService = require('../services/auth');

module.exports = {
  signIn: async(ctx, body) => {
    const { id } = ctx.request.body;

    const user = await userService.getUserById({ id });
    const token = await authService.sign({ user });

    ctx.body = {
      token,
    };

    await body();
  }
}