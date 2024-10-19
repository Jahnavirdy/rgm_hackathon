import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div>
        <h1>Course Selection</h1>
      </div>
      <div className="links">
        <Link to="/">Course</Link>
        <Link to="/teacher-assigment">Teacher Assignment</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </div>
  );
}

export default Nav;
