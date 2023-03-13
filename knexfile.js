const config = require('./app/config');

module.exports = {
  client: 'pg',
  connection: {
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    user: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DATABASE,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './app/migrations',
  },
  seeds: {
    directory: './app/seeds',
  },
};
