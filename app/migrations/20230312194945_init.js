/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */
exports.up = function up(knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('users', (table) => {
      table
        .uuid('id')
        .primary()
        .defaultTo(knex.raw('(uuid_generate_v4())'));

      table.string('fullName', 255).notNullable();
    })
    .createTable('tasks', (table) => {
      table
        .uuid('id')
        .primary()
        .defaultTo(knex.raw('(uuid_generate_v4())'));

      table.string('title', 1000).notNullable();
      table.text('description').notNullable();
      table.enum('status', ['OPEN', 'IN_PROGRESS', 'DONE']);

      table.uuid('userId')
        .index()
        .references('id')
        .inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */
exports.down = function down(knex) {
  return knex.schema
    .dropTable('tasks')
    .dropTable('users');
};
