import React, { useState } from 'react';
import CourseGrades from '../../course/grades/[student_id]/coursegradebook';


async function Gradebook({ studentGrades }) {
    // const [selectedCourse, setSelectedCourse] = useState(null);
    // const handleCourseClick = (course) => {
    //     setSelectedCourse(course);
    //     const newUrl = `/gradebook/${course.toLowerCase()}`;
    //     window.history.replaceState({ path: newUrl }, '', newUrl);
    // };
    // const res = await fetch('http://localhost:8000/api/course');
    // const data = await res.json();
    // lihat nilai secara umum
    // akses nilai di masing-masing course ketika klik course

    return (
        <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4"><a href='/gradebook'>Gradebook</a></h2>
        {selectedCourse ? (
            <CourseGrades course={selectedCourse} grades={studentGrades[selectedCourse].quizzes} />
        ) : (
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                <th className="py-2 px-4">Course</th>
                <th className="py-2 px-4">Grade</th>
                </tr>
            </thead>
            <tbody className="text-gray-600">
                {Object.keys(studentGrades).map(course => (
                <tr key={course} onClick={() => handleCourseClick(course)} className="cursor-pointer hover:bg-gray-100">
                    <td className="py-2 px-4">{course}</td>
                    <td className="py-2 px-4">{studentGrades[course].grade}/{studentGrades[course].maxGrade}</td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>
    );
}

export default Gradebook;
