const knex = require('../utils/knex');
const { TODO_STATUS } = require('../constants');

const createTask = async ({ userId, task }) => {
  const [ newTask ] = await knex('tasks')
    .insert({
      ...task,
      status: TODO_STATUS.OPEN,
      userId,
    })
    .returning(['id', 'title', 'description', 'status']);

  return newTask;
}

const getAllTasks = async({ userId }) => {
  return knex('tasks')
    .select('id', 'title', 'description', 'status')
    .where({ userId });
}

const getTaskById = async({ userId, id }) => {
  const task = await knex('tasks')
    .select('id', 'title', 'description', 'status')
    .where({ userId, id })
    .first();

  if (!task) {
    throw new Error(`Task with ID ${id} not found`);
  }

  return task;
}

const deleteTaskById = async({ userId, id }) => {
  await getTaskById({ userId, id })
  await knex('tasks')
    .where({ userId, id })
    .del();
}

const updateTaskStatus = async({ userId, id, status }) => {
  await getTaskById({ userId, id })

  const [ task ] = await knex('tasks')
    .where({ userId, id })
    .update({ status })
    .returning(['id', 'title', 'description', 'status']);

  return task;
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  deleteTaskById,
  updateTaskStatus,
}