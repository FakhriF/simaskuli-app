'use client';

import { getToken } from "@/app/(general)/actions";
import { formatDistanceToNow, parseISO } from 'date-fns';
import Link from "next/link";
import { useEffect, useState } from 'react';
import OriginalPost from './originalPost';
import Reply from './reply';
import WriteReply from './writeReply';

export default function ForumPost({ params }) {
  const [forumPost, setForumPost] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');
  const [userData, setUserData] = useState('');
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const [forumPostRes, userRes, repliesRes] = await Promise.all([
          fetch(`${process.env.BACKEND_URL}/forum/${params.id}`),
          fetch(`${process.env.BACKEND_URL}/user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`${process.env.BACKEND_URL}/forum/${params.id}/posts`)
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

  

  const handleDeletePost = async (postId) => {
    try {
      await fetch(`http://localhost:8000/api/forum/${params.id}/posts/${postId}`, {
        method: 'DELETE',
      });

      setReplies(replies.filter(reply => reply.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  

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
  }, [forumPost, userData], );



  return (
    <main className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/forum">
        <button className="text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-200" onClick={() => history.goBack()}>
          Back
        </button>
        </Link>
        <h2 className="text-lg text-center font-medium mb-4">{forumPost && forumPost.title}</h2>
        {forumPost ? (
          <OriginalPost forumPost={forumPost} formattedDate={formattedDate} user={userData} />
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
        {replies.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-4">Replies</h2>
            {replies.map(reply => (
              <Reply key={reply.id} reply={reply} currentUser={userData} onDelete={handleDeletePost} id={params.id}/>
            ))}
          </div>
        )}
        <WriteReply thread={forumPost} user={userData} id={params.id} />
      </div>
    </main>
  );
}
