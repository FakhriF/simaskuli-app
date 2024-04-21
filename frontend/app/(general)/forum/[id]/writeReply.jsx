'use client';

import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WriteReply({ thread, user, id }) {

    const router = useRouter();

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
                router.push(`/forum/${id}`);
                setReply('');
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    }

    return (
        <div className="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-20">
            <form className="px-3 mb-2 mt-2" autoComplete="off" onSubmit={handleSubmit}>
                <textarea
                    placeholder="Reply"
                    className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    required
                ></textarea>
                <div className="flex justify-end px-4 mt-2">
                    <button type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-blue-500 hover:bg-blue-600">
                        Submit Reply
                    </button>
                </div>
            </form>
        </div>
    );
}
