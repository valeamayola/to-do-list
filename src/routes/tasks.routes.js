import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} from '../controllers/tasks.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js';
import { validateRole } from '../middlewares/validateRole.js';

const router = Router();

// router.get('/admin-route', authRequired, validateRole(['admin']), adminController.getAdminData);

router.get('/tasks', authRequired, getTasks);

router.get('/tasks/:id', authRequired, getTask);

router.post(
    '/tasks', 
    authRequired, 
    validateSchema(createTaskSchema), 
    createTask
);

router.delete(
    '/tasks/:id', 
    authRequired,
    // validateRole(['admin']), 
    deleteTask);

router.put('/tasks/:id', authRequired, updateTask);

export default router;