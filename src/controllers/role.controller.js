import { UserModel } from '../models/user.model.js';

export const createRole = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    console.log(newUser);

    //validaciones de campos obligatorios
    if (newUser === null || newUser === undefined) {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios',
      });
    }

    const newUser = await UserModel.create({
      username,
      email,
      password,
      address,
    });

    return res.status(201).json({
      msg: 'Usuario creado exitosamente',
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json({
      msg: 'Usuarios obtenidos exitosamente',
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({
        msg: 'Usuario no encontrado',
      });
    }

    return res.status(200).json({
      msg: 'Usuario obtenido exitosamente',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { username },
      { returnDocument: 'after' },
    );
    return res.status(200).json({
      msg: 'Usuario actualizado exitosamente',
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser2 = await UserModel.findByIdAndDelete(id);
    return res.status(200).json({
      msg: 'Usuario eliminado exitosamente',
      data: updatedUser2,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};
