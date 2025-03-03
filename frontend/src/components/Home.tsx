"use client"; 

import React from "react";

const Home = () => {
  return (
    <div className="d-flex vh-100 text-center text-white bg-dark align-items-center justify-content-center">
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold">Welcome to Task Manager</h1>
            <p className="lead">
              Manage your tasks efficiently with our easy-to-use task management system.
            </p>
            <a href="/register" className="btn btn-primary btn-lg me-2">
              Get Started
            </a>
            <a href="/login" className="btn btn-outline-light btn-lg">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <style jsx>{`
        .bg-dark {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("/cover.jpg") no-repeat center center/cover;
          opacity: 0.8;
        }
        .bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("/cover.jpg") no-repeat center center/cover;
          filter: brightness(30%); /* Darkens the image */
        }
        .container {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Home;
