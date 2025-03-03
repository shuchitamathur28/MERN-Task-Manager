"use client";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  completed: boolean; 
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("http://localhost:5000/api/tasks");
  return response.json();
});

export const addTask = createAsyncThunk("tasks/addTask", async (text: string) => {
  const response = await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return response.json();
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId: string) => {
  await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
    method: "DELETE",
  });
  return taskId; // Return the deleted task ID to update the state
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task._id !== action.payload)
      });
  },
});

export default taskSlice.reducer;
