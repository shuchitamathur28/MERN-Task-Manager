"use client";

import React, { useState, useEffect, Component } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token); // Convert to boolean (true/false)
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token
        setIsAuthenticated(false);
        router.push("/login"); // Redirect to login page
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1>Task Manager</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-md-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {!isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/register">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" href="/tasks">My Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/tasks">Add Task</Link>
                            </li> 
                            <li className="nav-item">
                                <button className="btn btn-danger nav-link" onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    )}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
