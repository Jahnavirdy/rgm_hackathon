import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseSelection = ({ onSelectCourses }) => {
  const navigate = useNavigate();
  const [theoryCourses, setTheoryCourses] = useState([]);
  const [labCourses, setLabCourses] = useState([]);

  const availableTheoryCourses = ["Math", "Physics", "Chemistry", "Biology"];
  const availableLabCourses = ["Physics Lab", "Chemistry Lab", "Bio Lab"];

  const handleSelect = () => {
    if (theoryCourses.length === 4 && labCourses.length === 2) {
      onSelectCourses({ theory: theoryCourses, lab: labCourses });
      navigate("/teacher-assignment");
    } else {
      alert("Please select 4 theory courses and 2 lab courses.");
    }
  };

  return (
    <div>
      <h2>Select Courses</h2>

      <div>
        <h3>Theory Courses (4)</h3>
        {availableTheoryCourses.map((course, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              value={course}
              onChange={(e) => {
                if (e.target.checked && theoryCourses.length < 4) {
                  setTheoryCourses([...theoryCourses, e.target.value]);
                } else if (!e.target.checked) {
                  setTheoryCourses(
                    theoryCourses.filter((c) => c !== e.target.value)
                  );
                }
              }}
            />
            {course}
          </label>
        ))}
      </div>

      <div>
        <h3>Lab Courses (2)</h3>
        {availableLabCourses.map((course, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              value={course}
              onChange={(e) => {
                if (e.target.checked && labCourses.length < 2) {
                  setLabCourses([...labCourses, e.target.value]);
                } else if (!e.target.checked) {
                  setLabCourses(labCourses.filter((c) => c !== e.target.value));
                }
              }}
            />
            {course}
          </label>
        ))}
      </div>

      <button
        onClick={handleSelect}
        style={{
          cursor: "pointer",
          backgroundColor: "blue",
          padding: "10px",
          marginTop: "30px",
          border: "none",
          borderRadius: "15px",
          color: "white"
        }}
      >
        Submit Courses
      </button>
    </div>
  );
};

export default CourseSelection;
