'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ThreadCreation({ user }) {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [dueDate, setDueDate] = useState("");
      const [course_id, setCourseId] = useState("");
      const [submitted, setSubmitted] = useState(false); 
  
      const router = useRouter();

      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              const response = await axios.post(
                  "http://localhost:8000/api/quiz/add",
                  {
                      title,
                      description,
                      dueDate,
                      course_id,
                      user_id: 19,
                  }
              );
              if (response.status === 201) {
                  router.push("/quiz");
              } else {
                  throw new Error(response.data.message);
              }
              setSubmitted(true); 
          } catch (error) {
              console.error(error);
          }
      };
      // If form is submitted or cancelled, return null to hide the form
      if (submitted) {
          return null;
      }
  
      return (
        <div>
          <form
                className="bg-white shadow-md rounded-lg p-4 "
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-semibold mb-4">Create Quiz</h1>
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        maxLength="255"
                        className={`w-full px-4 py-2 border rounded-lg`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Due Date</label>
                    <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Course</label>
                    <input
                        className="w-full px-4 py-2 border rounded-lg"
                        value={course_id}
                        onChange={(e) => setCourseId(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mr-2 hover:bg-blue-600">
                        Create Quiz
                    </button>
                </div>
            </form>
      </div>
          
      );
}

