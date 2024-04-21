'use client';

// Import other necessary modules
import { getToken } from '@/app/(general)/actions';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { MdPerson, MdReply, MdThumbUp } from 'react-icons/md';
import WriteReply from './WriteReply';

export default function ForumPost({ params }) {
    const [forumPost, setForumPost] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');
    const [userData, setUserData] = useState(null);
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [forumPostRes, userRes, repliesRes] = await Promise.all([
                    fetch(`http://localhost:8000/api/forum/${params.id}`),
                    getToken().then(token =>
                        fetch("http://localhost:8000/api/user", {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        })
                    ),
                    fetch(`http://localhost:8000/api/forum/${params.id}/posts`)
                ]);

                const [forumPostData, userData, repliesData] = await Promise.all([
                    forumPostRes.json(),
                    userRes.json(),
                    repliesRes.json()
                ]);

                setForumPost(forumPostData);
                setUserData(userData);
                setReplies(repliesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.id]);

    useEffect(() => {
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
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
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
                        <p className="text-base text-gray-700">{forumPost.content}</p>
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
                {replies.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-lg font-medium mb-4">Replies</h2>
                        {replies.map(reply => (
                            <div key={reply.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center">
                                        <div className="bg-blue-500 rounded-full p-2 mr-3">
                                            <MdPerson size={20} color="#FFF" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium text-gray-900">{reply.user.name}</h3>
                                            <p className="text-sm text-gray-600">{formatDistanceToNow(parseISO(reply.created_at))} ago</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700">{reply.content}</p>
                            </div>
                        ))}
                    </div>
                )}
                <WriteReply thread={forumPost} user={userData} id={params.id} />
            </div>
            
        </main>
    );
}
