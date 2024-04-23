'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ThreadCreation({ user }) {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [learning_outcomes, setLearningOutcomes] = useState("");
      const [image_url, setImageUrl] = useState("");
      const [submitted, setSubmitted] = useState(false); 
  
      const router = useRouter();

      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              const response = await axios.post(
                  "http://localhost:8000/api/course/create",
                  {
                      title: title,
                      description: description,
                      image_url: image_url,
                      learning_outcomes: learning_outcomes,
                      user_id: 19,
                  }
              );
              if (response.status === 201) {
                  router.push("/course");
              } else {
                  setError(response.data.message);
              }
              setSubmitted(true); 
          } catch (error) {
              setError(error.response.data.message);
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
                <h1 className="text-2xl font-semibold mb-4">Create Course</h1>
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
                    <label className="block mb-2">Learning Outcomes</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        maxLength="63"
                        value={learning_outcomes}
                        onChange={(e) => setLearningOutcomes(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Image URL</label>
                    <input
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg`}
                        value={image_url}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mr-2 hover:bg-blue-600">
                        Create Course
                    </button>
                </div>
            </form>
      </div>
          
      );
}
