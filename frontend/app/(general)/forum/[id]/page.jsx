'use client';

import { formatDistanceToNow, parseISO } from 'date-fns';
import { useRouter } from 'next/navigation'; // corrected import
import { useEffect, useState } from 'react';
import { MdPerson, MdReply, MdThumbUp } from 'react-icons/md';

export default function ForumPost({ params }) {
    const router = useRouter();
    const { id } = params;
    const [forumPost, setForumPost] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');

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

    useEffect(() => { // corrected useEffect hook
        if (forumPost && forumPost.updated_at) {
            const date = parseISO(forumPost.updated_at);
            const timeDiff = formatDistanceToNow(date);
            if (timeDiff === 'less than a minute') {
                setFormattedDate('just now');
            } else {
                setFormattedDate(`${timeDiff} ago`);
            }
        }
    }, [forumPost]);

    return (
        <main className="py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {forumPost ? (
                    <div className="block border border-black p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-blue-500 rounded-full p-2 mr-3">
                                    <MdPerson size={24} color="#FFF" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">{forumPost.user.name}</h2>
                                    <p className="text-sm text-gray-600">{forumPost.user.role}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">{formattedDate}</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-base text-gray-700">{forumPost.content}</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 mr-4">
                                <MdThumbUp size={20} className="mr-1" />
                                Like
                            </button>
                            <button className="flex items-center text-sm text-blue-500 hover:text-blue-600">
                                <MdReply size={20} className="mr-1" />
                                Reply
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Loading...</p>
                )}
            </div>
        </main>
    );
}
