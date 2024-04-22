import { formatDistanceToNow, parseISO } from 'date-fns';
import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import PostDeletionPopup from './replyDeletionPopup';

export default function Reply({ reply, onDelete }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = () => {
    // Toggle the delete confirmation popup
    setShowDeleteConfirmation(true);
  };

  const onDeleteConfirmation = () => {
    // Call the onDelete function passed from the parent component
    onDelete(reply.id);
    // Close the delete confirmation popup
    setShowDeleteConfirmation(false);
  };

  const onCancelDelete = () => {
    // Close the delete confirmation popup
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4 relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className={`bg-${reply.user?.role === 'student' ? 'blue' : reply.user?.role === 'teacher' ? 'red' : 'white'}-500 rounded-full p-1 mr-3`}>
          <img src = {reply.user.profile_url} className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900">{reply.user.name}</h3>
            <p className={`text-sm capitalize ${reply.user?.role === 'student' ? 'text-blue-600' : reply.user?.role === 'teacher' ? 'text-red-600' : 'text-gray-600'}`}>{reply.user?.role}</p>

          </div>
        </div>
        <p className="text-sm text-gray-600">{formatDistanceToNow(parseISO(reply.created_at))} ago</p>
      </div>
      <p className="text-sm text-gray-700">{reply.content}</p>

      {/* Show delete button */}
      <div className="absolute bottom-2 right-2">
        <button
          className="flex items-center text-sm text-red-500 hover:text-red-600 mr-2 py-2"
          onClick={handleDelete}
        >
          <MdDeleteOutline />
          <span>Delete</span>
        </button>
      </div>

      {/* Show delete confirmation popup */}
      {showDeleteConfirmation && (
        <PostDeletionPopup onDelete={onDeleteConfirmation} onCancel={onCancelDelete} />
      )}
    </div>
  );
}

