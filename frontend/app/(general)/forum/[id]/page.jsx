'use client';

// Import other necessary modules
import { getToken } from '@/app/(general)/actions';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import Reply from './Reply';
import WriteReply from './WriteReply';
import OriginalPost from './originalPost';

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
                    <OriginalPost forumPost={forumPost} formattedDate={formattedDate} />
                ) : (
                    <p className="text-center text-gray-500">Loading...</p>
                )}
                {replies.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-lg font-medium mb-4">Replies</h2>
                        {replies.map(reply => (
                            <Reply key={reply.id} reply={reply} />
                        ))}
                    </div>
                )}
                <WriteReply thread={forumPost} user={userData} id={params.id} />
            </div>
        </main>
    );
}
