'use client';

import { LoadingModal } from "@/app/(general)/components/loading";
import { useEffect, useState } from 'react';
import ThreadCard from './ThreadCard';

export default function ForumThread() {
    const [threads, setThreads] = useState([]);
    const [userData, setUserData] = useState({}); 
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            setLoading(true);
            const [forumRes, usersRes] = await Promise.all([
            fetch(`http://localhost:8000/api/forum?page=${currentPage}`),
            fetch(`http://localhost:8000/api/users`)
          ]);
  
          const [forumData, userData] = await Promise.all([
            forumRes.json(),
            usersRes.json()
          ]);

  
          const userDataMap = userData.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
          }, {});
  
          const threadsData = forumData.data; 
          const updatedThreads = threadsData.map(thread => ({
            ...thread,
            user: userDataMap[thread.user_id]
        }));
  
          setThreads(updatedThreads);
          setUserData(userDataMap); 
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [currentPage]);
  
    return (
      <div>
        <LoadingModal showModal={loading} />
        <div className="space-y-6">
          {threads.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} />
          ))}
        </div>
      </div>
    );
  }
  