import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ForumPagination from './ForumPagination';
import ThreadCard from './ThreadCard';
export default function ForumThread({ user }) {
  const [threads, setThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

        setTotalPages(forumData.meta.total_pages);
        setThreads(updatedThreads);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, user.id]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const isCreatedByLoggedInUser = (userId) => {
    return userId === user.id;
  };

  return (
    <div>
      <ForumPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <div className="space-y-6">
        {threads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} isCreatedByLoggedInUser={isCreatedByLoggedInUser(thread.user_id)} />
        ))}
      </div>
    </div>
  );
}