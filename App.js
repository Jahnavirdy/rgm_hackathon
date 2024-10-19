import React, { useState } from "react";
import CourseSelection from "./components/CourseSelection";
import TeacherAssignment from "./components/TeacherAssignment";
import FeedbackForm from "./components/FeedbackForm";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const [selectedCourses, setSelectedCourses] = useState({
    theory: [],
    lab: []
  });

  const handleCourseSelection = (courses) => {
    setSelectedCourses(courses);
  };

  return (
    <div className="App">
      <Nav />
      <h1>Course Selection and Teacher Assignment System</h1>
      <Routes>
        <Route
          path="/"
          element={<CourseSelection onSelectCourses={handleCourseSelection} />}
        />
        {selectedCourses.theory.length > 0 &&
          selectedCourses.lab.length > 0 && (
            <Route
              path="/teacher-assignment"
              element={<TeacherAssignment selectedCourses={selectedCourses} />}
            />
          )}
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>

      {/* <CourseSelection onSelectCourses={handleCourseSelection} /> */}

      {/* {selectedCourses.theory.length > 0 && selectedCourses.lab.length > 0 && (
        <Route
          path="/teacher-assignment"
          element={<TeacherAssignment selectedCourses={selectedCourses} />}
        />
      )} */}
    </div>
  );
}

export default App;
