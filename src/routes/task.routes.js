import { Router } from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/task.controller.js';

export const taskRoutes = Router();

//Ruta para crear una tarea
taskRoutes.post('/tasks', createTask);

//Ruta para traer todas las tareas
taskRoutes.get('/tasks', getAllTasks);

//Ruta para traer una tarea por id
taskRoutes.get('/tasks/:id', getTaskById);

//Ruta para actualizar una tarea
taskRoutes.put('/tasks/:id', updateTask);

//Ruta para eliminar una tarea
taskRoutes.delete('/tasks/:id', deleteTask);
