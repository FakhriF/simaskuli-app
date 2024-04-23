import { LoadingModal } from "@/app/(general)/components/loading";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ForumPagination from './ForumPagination';
import ThreadCard from './ThreadCard';

export default function ForumThread({ user }) {
  const [threads, setThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [currentPage, user.id, searchQuery]);

  const fetchData = async () => {
    try {
      setLoading(true);

      let url = `${process.env.BACKEND_URL}/forum?page=${currentPage}`;
      if (searchQuery) {
        url += `&search=${searchQuery}`;
      }

      const [forumRes, usersRes] = await Promise.all([
        fetch(url),
        fetch(`${process.env.BACKEND_URL}/users`)
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const isCreatedByLoggedInUser = (userId) => {
    return userId === user.id;
  };

  // Determine which set of threads to use based on search query
  const displayThreads = searchQuery ? threads.filter(thread =>
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.content.toLowerCase().includes(searchQuery.toLowerCase())
  ) : threads;

  return (
    <div>
      <LoadingModal showModal={loading} />
      <div className="grid grid-cols-3 justify-between items-center mb-4">
        <div className="col-span-2">
        <ForumPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
        <div className="grid justify-items-end">
        <div className="flex justify-end">
          <input 
            type="text" 
            placeholder="Search" 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)} 
          />
          <button className="bg-blue-500 text-white px-3 py-2 ml-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"  onClick={handleSearch}>Search</button>
        </div>
        </div>
      </div>
      <div className="space-y-1">
        {displayThreads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} isCreatedByLoggedInUser={isCreatedByLoggedInUser(thread.user_id)} />
        ))}
      </div>
    </div>
  );
}
