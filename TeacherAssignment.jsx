import React, { useState } from "react";
import TeacherProfile from "./TeacherProfile"; // Import TeacherProfile component
import "./TeacherAssignments.css";
const TeacherAssignment = ({ selectedCourses }) => {
  const [teacherAssignments, setTeacherAssignments] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState(null); // Track selected teacher for profile display

  const availableTeachers = [
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
    { id: 3, name: "Dr. Lee" },
    { id: 4, name: "Dr. Patel" },
    { id: 5, name: "Dr. Samson" },
    { id: 6, name: "Dr. Nancy" },
    { id: 7, name: "Dr. Latham" },
    { id: 8, name: "Dr. Tom" },
    { id: 9, name: "Dr. Devon" },
    { id: 10, name: "Dr. Ash" }
  ];

  // Handles assigning a teacher to a course
  const handleAssignment = (course, teacherId) => {
    setTeacherAssignments({ ...teacherAssignments, [course]: teacherId });
  };

  // Submits the assignments for final confirmation
  const handleSubmit = () => {
    if (
      Object.keys(teacherAssignments).length ===
      selectedCourses.theory.length + selectedCourses.lab.length
    ) {
      setSubmitted(true);
    } else {
      alert("Please assign a teacher for all courses.");
    }
  };

  // Filters out already assigned teachers from the dropdown for other courses
  const getFilteredTeachers = (currentCourse) => {
    const assignedTeacherIds = Object.entries(teacherAssignments)
      .filter(([course]) => course !== currentCourse)
      .map(([, teacherId]) => parseInt(teacherId));
    return availableTeachers.filter(
      (teacher) => !assignedTeacherIds.includes(teacher.id)
    );
  };

  // Handles showing the teacher profile when their name is clicked
  const handleTeacherClick = (teacherId) => {
    setSelectedTeacherId(teacherId);
  };

  return (
    <div className="teachers">
      <h2>Assigned Teachers</h2>
      {!submitted ? (
        <>
          {selectedCourses.theory.map((course, idx) => (
            <div key={idx} className="theory">
              <h3>{course}</h3>
              <select
                onChange={(e) => handleAssignment(course, e.target.value)}
                value={teacherAssignments[course] || ""} // Set the value to the assigned teacher
              >
                <option value="">Select Teacher</option>
                {getFilteredTeachers(course).map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Map through the selected lab courses and display a dropdown for each */}
          {selectedCourses.lab.map((course, idx) => (
            <div key={idx} className="courses">
              <h3>{course}</h3>
              <select
                onChange={(e) => handleAssignment(course, e.target.value)}
                value={teacherAssignments[course] || ""} // Set the value to the assigned teacher
              >
                <option value="">Select Teacher</option>
                {getFilteredTeachers(course).map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            onClick={handleSubmit}
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
            Submit Assignments
          </button>
        </>
      ) : (
        <>
          {/* Display the assigned teachers for theory courses */}
          {selectedCourses.theory.map((course, idx) => (
            <div key={idx} className="courses-list">
              <h3>{course}</h3>
              <p>
                Teacher:{" "}
                <span
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer"
                  }}
                  onClick={() => handleTeacherClick(teacherAssignments[course])}
                >
                  {
                    availableTeachers.find(
                      (t) => t.id === parseInt(teacherAssignments[course])
                    )?.name
                  }
                </span>
              </p>
            </div>
          ))}

          {/* Display the assigned teachers for lab courses */}
          {selectedCourses.lab.map((course, idx) => (
            <div key={idx} className="courses-list">
              <h3>{course}</h3>
              <p>
                Teacher:{" "}
                <span
                  className="teacher-names"
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer"
                  }}
                  onClick={() => handleTeacherClick(teacherAssignments[course])}
                >
                  {
                    availableTeachers.find(
                      (t) => t.id === parseInt(teacherAssignments[course])
                    )?.name
                  }
                </span>
              </p>
            </div>
          ))}

          {/* Display the teacher profile when a teacher is selected */}
          {selectedTeacherId && (
            <div className="profile">
              <h2>Teacher Profile</h2>
              <TeacherProfile teacherId={parseInt(selectedTeacherId)} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TeacherAssignment;
