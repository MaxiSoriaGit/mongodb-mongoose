import { Router } from 'express';

export const roleRouter = Router();

//Ruta para crear un usuario
userRoutes.post('/role', createUser);

//Ruta para traer todos los usuarios
userRoutes.get('/task', getAllUsers);

//Ruta para traer un usuario por id
userRoutes.get('/users/:id', getUserById);

//Ruta para actualizar un usuario
userRoutes.put('/users/:id', updateUser);

//Ruta para eliminar un usuario
userRoutes.delete('/users/:id', deleteUser);
