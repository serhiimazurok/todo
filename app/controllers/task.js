const taskService = require('../services/task');

module.exports = {
  createTask: async(ctx, next) => {
    const { user } = ctx;
    const task = ctx.request.body;

    ctx.body = await taskService.createTask({ userId: user.id, task });

    await next();
  },
  getAllTasks: async(ctx, next) => {
    const { user } = ctx;

    ctx.body = await taskService.getAllTasks({ userId: user.id });

    await next();
  },
  getTaskById: async(ctx, next) => {
    const { user } = ctx;
    const { id } = ctx.params;

    ctx.body = await taskService.getTaskById({ userId: user.id, id });

    await next();
  },
  deleteTaskById: async(ctx, next) => {
    const { user } = ctx;
    const { id } = ctx.params;

    ctx.body = await taskService.deleteTaskById({ userId: user.id, id });

    await next();
  },
  updateTaskStatus: async(ctx, next) => {
    const { user } = ctx;
    const { id } = ctx.params;
    const { status } = ctx.request.body;

    ctx.body = await taskService.updateTaskStatus({ userId: user.id, id, status });

    await next();
  }
}