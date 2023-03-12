const Koa = require('koa');
const config = require('./config');
const router = require('./routes');

const app = new Koa();

app.use(router.routes())

app.listen(config.PORT, () => {
  console.log("Server is started!", `PORT: ${config.PORT}`);
});