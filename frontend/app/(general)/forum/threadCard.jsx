import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import ThreadDeletionPopup from './ThreadDeletionPopup';

export default function ThreadCard({ thread, isCreatedByLoggedInUser }) {
  const router = useRouter();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/forum/${thread.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.refresh();
        router.push('/forum')
      } else {
        const responseData = await response.json();
        console.error('Error deleting thread:', responseData.error);
      }
    } catch (error) {
      console.error('Error deleting thread:', error);
    }
  };

  const onDeleteConfirmation = () => {
    handleDelete();
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 flex justify-between">
      <Link href={`/forum/${thread.id}`}>
        <div>
          <h2 className="text-xl font-semibold">{thread.title}</h2>
          <p className="text-gray-500 text-sm">
            By {thread.user?.name}, {format(new Date(thread.created_at), 'MMM dd, yyyy')}
          </p>
        </div>
      </Link>

      <div className="flex items-center space-x-3 text-gray-500 hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer">
        <AiOutlineLike className="w-5 h-5" />
        <span>Like</span>
      </div>

      {isCreatedByLoggedInUser && (
        <button
          className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition duration-200 ease-in-out cursor-pointer"
          onClick={() => setShowDeleteConfirmation(true)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          <span>Delete</span>
        </button>
      )}

      {showDeleteConfirmation && (
        <ThreadDeletionPopup
          onDelete={onDeleteConfirmation}
          onCancel={() => setShowDeleteConfirmation(false)}
          thread={thread}
        />
      )}
    </div>
  );
}
