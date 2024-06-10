"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function CourseGrades({ params }) {
    const router = useRouter();
    const [courseGrades, setCourseGrades] = useState([]);
    console.log(params);
    useEffect(() => {
        // Fetch course grades data from the API
        fetch(
            `${process.env.BACKEND_URL}/course/${params.id}/grades/${params.student_id}`
        )
            .then((response) => response.json())
            .then((data) => setCourseGrades(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <div className="container mx-auto py-8">
            <button
                onClick={router.back}
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Go Back
            </button>
            <h2 className="text-2xl font-bold mb-4">Course Grades</h2>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="py-2 px-4">Quiz / Assignment</th>
                        <th className="py-2 px-4">Grade</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {courseGrades.map((grade) => (
                        <tr key={grade.quiz.title}>
                            <td className="py-2 px-4">{grade.quiz.title}</td>
                            <td className="py-2 px-4">{grade.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseGrades;
