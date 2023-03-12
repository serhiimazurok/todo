const Router = require('koa-router');
const taskController = require('../controllers/task');

const router = new Router();

router.post('/task', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/task/:id', taskController.getTaskById);
router.delete('/task/:id', taskController.deleteTaskById);
router.put('/task/:id/status', taskController.updateTaskStatus);

module.exports = router;