const Router = require('koa-router');

const taskController = require('../controllers/task');
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

const router = new Router();

router.post('/signIn', authController.signIn);

router.post('/task', authMiddleware, taskController.createTask);
router.get('/tasks', authMiddleware, taskController.getAllTasks);
router.get('/task/:id', authMiddleware, taskController.getTaskById);
router.delete('/task/:id', authMiddleware, taskController.deleteTaskById);
router.put('/task/:id/status', authMiddleware, taskController.updateTaskStatus);

module.exports = router;