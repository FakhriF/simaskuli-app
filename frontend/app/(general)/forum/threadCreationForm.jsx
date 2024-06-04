'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ThreadCreationForm({ user, onCancel }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false); 

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.BACKEND_URL}/forum`,
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
            <div className="flex justify-between">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mr-2 hover:bg-blue-600">
                    Create Thread
                </button>
                <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-lg w-full ml-2 hover:bg-gray-600" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}
