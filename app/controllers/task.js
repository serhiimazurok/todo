const taskService = require('../services/task');

module.exports = {
  createTask: async(ctx, next) => {
    const { userId } = ctx;
    const task = ctx.request.body;

    ctx.body = await taskService.createTask({ userId, task });

    await next();
  },
  getAllTasks: async(ctx, next) => {
    const { userId } = ctx;

    ctx.body = await taskService.getAllTasks({ userId });

    await next();
  },
  getTaskById: async(ctx, next) => {
    const { userId } = ctx;
    const { id } = ctx.params;

    ctx.body = await taskService.getTaskById({ userId, id });

    await next();
  },
  deleteTaskById: async(ctx, next) => {
    const { userId } = ctx;
    const { id } = ctx.params;

    ctx.body = await taskService.deleteTaskById({ userId, id });

    await next();
  },
  updateTaskStatus: async(ctx, next) => {
    const { userId } = ctx;
    const { id } = ctx.params;
    const { status } = ctx.request.body;

    ctx.body = await taskService.updateTaskStatus({ userId, id, status });

    await next();
  }
}