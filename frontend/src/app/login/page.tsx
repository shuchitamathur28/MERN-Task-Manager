"use client";

import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/tasks"); // Redirect logged-in users to tasks page
    } 
  }, []);
  
  return <>
        <Navbar />
        <Login />
    </>;
}
