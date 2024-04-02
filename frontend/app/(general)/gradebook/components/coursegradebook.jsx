import React from 'react';

function CourseGrades({ course, grades }) {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">{course} Grades</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-2 px-4">Quiz</th>
            <th className="py-2 px-4">Grade</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {Object.entries(grades).map(([quiz, grade]) => (
            <tr key={quiz}>
              <td className="py-2 px-4">{quiz}</td>
              <td className="py-2 px-4">{grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseGrades;