import { Request, Response } from "express";
import Task from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const addTask = async (req: Request, res: Response) => {
  const newTask = new Task({ text: req.body.text });
  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
