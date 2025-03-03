"use client"; // Required for client components

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, fetchTasks } from "../redux/taskSlice";
import { AppDispatch, RootState } from "../redux/store";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

export default function Homepage() {
  return (
    <main>
      <Home></Home>
      <Navbar></Navbar>
      {/* <TaskForm />
      <Suspense fallback={<p>Loading tasks...</p>}>
        <TaskList />
      </Suspense> */}
    </main>
  );
}