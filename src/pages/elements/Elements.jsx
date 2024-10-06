import { useEffect, useState } from "react";
import "./Students.css";
import StudentProfilePhoto from "./StudentProfilePhoto";
import StudentAsElement from "./StudentsAsElement";

export default function Elements() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      const jsonStudent = await fetch("/assets/data/Student.json");
      const student = await jsonStudent.json();

      setStudent(student);
      console.log("student ", student);
    };

    getStudents();
  }, []);

  return (
    <>
      <div className="my-3">
        <div className="card student-detail-card">
          <StudentProfilePhoto student={student} />
          <StudentAsElement props={student} />
        </div>
      </div>
    </>
  );
}
