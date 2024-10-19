import React, { useState, useEffect } from "react";
import "./TeacherProfile.css";

const TeacherProfile = ({ teacherId }) => {
  const [teacher, setTeacher] = useState(null);

  // Dummy data simulating a backend API response
  const teacherData = [
    {
      id: 1,
      name: "Dr. Smith",
      rating: 4.5,
      projects: ["AI Research", "Blockchain Technology"],
      patents: ["US1234567", "US9876543"],
      academicBackground: "Ph.D. in Computer Science from MIT"
    },
    {
      id: 2,
      name: "Dr. Johnson",
      rating: 4.2,
      projects: ["Quantum Computing", "Cybersecurity"],
      patents: ["US2345678", "US8765432"],
      academicBackground: "Ph.D. in Electrical Engineering from Stanford"
    },
    {
      id: 3,
      name: "Dr. Lee",
      rating: 4.8,
      projects: ["Data Science", "Neural Networks"],
      patents: ["US3456789", "US7654321"],
      academicBackground: "Ph.D. in Data Science from Harvard"
    },
    {
      id: 4,
      name: "Dr. Patel",
      rating: 4.6,
      projects: ["Cloud Computing", "Distributed Systems"],
      patents: ["US4567890", "US6543210"],
      academicBackground: "Ph.D. in Computer Engineering from UC Berkeley"
    },
    {
      id: 5,
      name: "Dr. Samson",
      rating: 4.7,
      projects: ["Quantum Computing", "Cybersecurity"],
      patents: ["US2345678", "US8765432"],
      academicBackground: "Ph.D. in Electrical Engineering from Stanford"
    },
    {
      id: 6,
      name: "Dr. Nancy",
      rating: 4.8,
      projects: ["Advanced Mathematics", "Geometry and Trigonometry"],
      patents: ["US1234567", "US9876543"],
      academicBackground: "Ph.D. in Mathematics from Harvard"
    },
    {
      id: 7,
      name: "Dr. Latham",
      rating: 4.6,
      projects: ["Lifecycle methods", "Osmosis and Reverse Osmosis"],
      patents: ["US1234567", "US9876543"],
      academicBackground: "Ph.D. in Biological Science from Oxford"
    },
    {
      id: 8,
      name: "Dr. Tom",
      rating: 4.5,
      projects: ["AI Research", "Blockchain Technology"],
      patents: ["US1234567", "US9876543"],
      academicBackground: "Ph.D. in Computer Science from Cambridge"
    },
    {
      id: 9,
      name: "Dr. Devon",
      rating: 4.3,
      projects: ["Chemical Research", "Organic Chemistry"],
      patents: ["US1234567", "US9876543"],
      academicBackground: "Ph.D. in Chemical Sciences from Masachusets"
    },
    {
      id: 10,
      name: "Dr. Ashwin",
      rating: 4.9,
      projects: ["Quantum Chemistry", "Periodic Table Elements"],
      patents: ["US1234567", "US9876543"],
      academicBackground: "Ph.D. in Chemical Science from IIT Karagpur"
    }
  ];

  useEffect(() => {
    const fetchTeacherData = () => {
      const selectedTeacher = teacherData.find((t) => t.id === teacherId);
      setTeacher(selectedTeacher);
    };

    fetchTeacherData();
  }, [teacherId]);

  if (!teacher) {
    return <div>Loading teacher profile...</div>;
  }

  return (
    <div className="teacher-profile">
      <h2>{teacher.name}</h2>
      <p>
        <strong>Rating:</strong> {teacher.rating} / 5
      </p>
      <p>
        <strong>Academic Background:</strong> {teacher.academicBackground}
      </p>

      <h3>Research Projects</h3>
      <ul>
        {teacher.projects.map((project, idx) => (
          <li key={idx}>{project}</li>
        ))}
      </ul>

      <h3>Patents</h3>
      <ul>
        {teacher.patents.map((patent, idx) => (
          <li key={idx}>{patent}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherProfile;
