import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

export const userRoutes = Router();

//Ruta para crear un usuario
userRoutes.post('/users', createUser);

//Ruta para traer todos los usuarios
userRoutes.get('/users', getAllUsers);

//Ruta para traer un usuario por id
userRoutes.get('/users/:id', getUserById);

//Ruta para actualizar un usuario
userRoutes.put('/users/:id', updateUser);

//Ruta para eliminar un usuario
userRoutes.delete('/users/:id', deleteUser);
