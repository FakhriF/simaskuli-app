'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ThreadCreationForm( { user } ) {  
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState("");

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
        }
        catch (error) {
            setError(error.response.data.message);
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
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
                    />
                </div>
                <div className="mb-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Submit</button>
                </div>
            </form>
        </>
    )
    
}