import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  deadline: { type: Date },
  createdAt: { type: Date, default: Date.now },
   category: { type: String, default: null }}, // <-- ajout catégorie
    { timestamps: true } 
);


const Task = mongoose.model('Task', taskSchema);

export default Task;