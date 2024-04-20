'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ThreadCreationForm({ user }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/api/forum",
                {
                    title: title,
                    content: content,
                    user_id: user.id,
                }
            );
            if (response.status === 201) {
                router.push("/forum");
            } else {
                setError(response.data.message);
            }
            setSubmitted(true); // Update state to indicate form submission
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    // If form is submitted, return null to hide the form
    if (submitted) {
        return null;
    }

    return (
        <form
            className="bg-white shadow-md rounded-lg p-4 "
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold mb-4">Create Thread</h1>
            <div className="mb-4">
                <label className="block mb-2">Title</label>
                <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Content</label>
                <textarea
                    className="w-full px-4 py-2 border rounded-lg"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                Create Thread
            </button>
        </form>
    );
}
