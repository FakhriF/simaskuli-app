'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ForumPost({ params }) {
    const router = useRouter();
    const { id } = params;
    const [forumPost, setForumPost] = useState(null);

    useEffect(() => {
        const fetchForumPostData = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/forum/${id}`);
                const data = await res.json();
                setForumPost(data);
            } catch (error) {
                console.error('Error fetching forum post data:', error);
            }
        };

        fetchForumPostData();
    }, [id]);

    return (
        <main className="py-8">
            <div className="max-w-7xl mx-auto px-6 space-y-3 sm:px-6 lg:px-8">
                {forumPost ? (
                    <div className="block border border-black p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center space-x-2">
                        <div className="bg-gray-200 rounded-lg p-4 flex items-center justify-center">
                            <div className={`text-slate-700 dark:text-slate-500 text-center`}>
                                {forumPost.user.name}
                            </div>
                            <div className="text-red-500 dark:text-red-400">
                                {forumPost.user.role}
                            </div>
                        </div>
                        <div className="flex py-2">
                            <p>{forumPost.content}</p>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <div>Like</div>
                            <div>Reply</div>
                        </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </main>
    );
}
