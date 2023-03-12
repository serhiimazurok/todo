/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // @todo deletes all existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 'b546f022-bf06-426e-9e13-1882dcb761b7', fullName: 'John Smith' },
  ]);

  // @todo deletes all existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      id: '7dcc2d15-d7a7-4d75-b18b-393ccc8cca91',
      title: 'Task 1',
      description: 'Task description 1',
      status: 'OPEN',
      userId: 'b546f022-bf06-426e-9e13-1882dcb761b7',
    },
    {
      id: '48c05c61-0849-42a8-89a3-2ef7e3ad0d80',
      title: 'Task 2',
      description: 'Task description 2',
      status: 'IN_PROGRESS',
      userId: 'b546f022-bf06-426e-9e13-1882dcb761b7',
    },
    {
      id: '67dd7bc5-9770-49f7-9b83-48883b40c107',
      title: 'Task 3',
      description: 'Task description 3',
      status: 'DONE',
      userId: 'b546f022-bf06-426e-9e13-1882dcb761b7',
    },
  ]);
};
