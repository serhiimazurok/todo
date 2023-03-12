const Router = require('koa-router');
const knex = require('../utils/knex');

const router = new Router();

router.get('/todo/:id', async (ctx, next) => {
  const todo = await knex('todos')
    .where({ id: '1' })
    .first();

  ctx.body = todo;

  await next();
});

router.get('/todos', (ctx, next) => {

  ctx.body = "Hello, World from Router"
});

module.exports = router;