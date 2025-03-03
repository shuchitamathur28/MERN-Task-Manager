"use client"; 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

const Tasks = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      router.push("/login"); // Redirect to login if not logged in
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return <p>Loading...</p>;

  return <>
    <Navbar />
    <TaskForm />
    <TaskList />
  </>;
};

export default Tasks;
