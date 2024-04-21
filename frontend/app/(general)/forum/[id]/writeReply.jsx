'use client';

import axios from "axios";
import { useState } from 'react';

export default function WriteReply({ thread, user, id }) {

    const [reply, setReply] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `http://localhost:8000/api/forum/${id}/posts`,
                {
                    content: reply,
                    thread_id: id,
                    user_id: user.id,
                }
            );
            if (response.status === 201) {
                console.log('Reply submitted successfully');
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    }

    return (
        <div className="py-8">
            <form className="bg-white shadow-md rounded-lg py-4" autoComplete="off" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold mb-4">Write Reply</h1>
                <div className="mb-4">
                    <label htmlFor="reply" className="block mb-2">Reply</label> {/* Added htmlFor attribute */}
                    <textarea
                        id="reply"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Submit Reply
                </button>
            </form>
        </div>
    );
}
