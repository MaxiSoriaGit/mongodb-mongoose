import { TaskModel } from '../models/task.model.js';

export const createTask = async (req, res) => {
  try {
    const { tittle, description, author } = req.body;

    //validaciones de campos obligatorios
    if (!tittle || !description || !author) {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios',
      });
    }

    const newTask = await TaskModel.create({
      tittle,
      description,
      author,
    });

    console.log(newTask);

    return res.status(201).json({
      msg: 'Tarea creada exitosamente',
      data: newTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    return res.status(200).json({
      msg: 'Tareas obtenidas exitosamente',
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findById(id);

    if (!task) {
      return res.status(404).json({
        msg: 'Tarea no encontrada',
      });
    }

    return res.status(200).json({
      msg: 'Tarea obtenida exitosamente',
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { tittle, description, author } = req.body;

    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      { tittle, description, author },
      { new: true },
    );
    return res.status(200).json({
      msg: 'Tarea actualizada exitosamente',
      data: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await TaskModel.findByIdAndDelete(id);
    return res.status(200).json({
      msg: 'Tarea eliminada exitosamente',
      data: deletedTask,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error interno del servidor',
    });
  }
};
