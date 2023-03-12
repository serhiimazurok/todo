/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */
exports.up = function(knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('users', function (table) {
      table
        .uuid('id')
        .primary()
        .defaultTo(knex.raw("(uuid_generate_v4())"));

      table.string('full_name', 255).notNullable();
    })
    .createTable('todos', function (table) {
      table
        .uuid('id')
        .primary()
        .defaultTo(knex.raw("(uuid_generate_v4())"));

      table.string('title', 1000).notNullable();
      table.text('description').notNullable();
      table.enum('status', ['OPEN', 'IN_PROGRESS', 'DONE', 'SKIPPED'])

      table.uuid('user_id')
        .index()
        .references('id')
        .inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable("todos")
    .dropTable("users");
};
