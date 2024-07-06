import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Project = () => {
  return (
    <div className="container">
      <div className="content-services project">
        <h2>Our Project</h2>
      </div>

      <div className="content-project">
        <div className="project-child">
          <NavLink
            to="Bathroom"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "#CDA274" : "white",
            })}
          >
            Bathroom
          </NavLink>
          <NavLink
            to="Bedroom"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "#CDA274" : "white",
            })}
          >
            Bedroom
          </NavLink>
          <NavLink
            to="Kitchen"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "#CDA274" : "white",
            })}
          >
            Kitchen
          </NavLink>
          <NavLink
            to="Living"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "#CDA274" : "white",
            })}
          >
            Living Area
          </NavLink>
        </div>

      </div>

      <Outlet />
    </div>
  );
};

export default Project;
