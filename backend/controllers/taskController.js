// src/controllers/taskController.js
import Task from '../models/taskModel.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// controllers/taskController.js

export const createTask = async (req, res) => {
  console.log('Req.body reçu:', req.body);

  try {
    const { title, deadline, category } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Le titre est obligatoire" });
    }

    if (deadline) {
      const now = new Date();
      const deadlineDate = new Date(deadline);
      if (deadlineDate < now.setHours(0, 0, 0, 0)) {
        return res.status(400).json({ message: "La date limite ne peut pas être dans le passé" });
      }
    }
    console.log('deadline:', deadline);

    const task = new Task({
      title,
      deadline: deadline ? new Date(deadline) : undefined,
      category: category || null,  // ajout catégorie (ou null si pas fourni)
    });

    await task.save();

    console.log('Task sauvegardée:', task);

    res.status(201).json(task);
  } catch (err) {
    console.error('Erreur:', err);
    res.status(500).json({ message: 'Erreur lors de la création de la tâche' });
  }
};






export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Tâche supprimée' });
};
