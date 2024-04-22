import { formatDistanceToNow, parseISO } from 'date-fns';
import { useState } from 'react';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';
import PostDeletionPopup from './replyDeletionPopup';

export default function Reply({ reply, currentUser, onDelete, id  }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(reply.content);

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/forum/${id}/posts/${reply.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: editedContent }),

      });
      if (response.ok) {
        console.log("thread id", id);
        console.log("reply id", reply.id);
        

      } else {
        console.error('Failed to update reply:', response.status);
      }
    } catch (error) {
      console.error('Error updating reply:', error);
    }
    setIsEditing(false);
  };


  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4 relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className={`bg-${reply.user?.role === 'student' ? 'blue' : reply.user?.role === 'teacher' ? 'red' : 'white'}-500 rounded-full p-1 mr-3`}>
            <img src={reply.user.profile_url} className="w-12 h-12 rounded-full" alt="Profile" />
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900">{reply.user.name}</h3>
            <p className={`text-sm capitalize ${reply.user?.role === 'student' ? 'text-blue-600' : reply.user?.role === 'teacher' ? 'text-red-600' : 'text-gray-600'}`}>{reply.user?.role}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">{formatDistanceToNow(parseISO(reply.created_at))} ago</p>
      </div>
      {isEditing ? (

        <div>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="mb-4 border border-gray-300 p-2 rounded-md w-full"
            rows={4}
            placeholder="Edit content"
            required
          />
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2" onClick={handleEditSave}>
              Save
            </button>
            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400" onClick={handleEditCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // Display mode
        <>
          <p className="text-base text-gray-700">{reply.content}</p>
          {currentUser && currentUser.id === reply.user.id && (
            <div className="flex justify-between items-center mt-4">
              <div className="flex">
                {/* Like and reply buttons */}
              </div>
              <div className="flex items-center">
                <button className="flex items-center text-sm text-gray-500 hover:text-gray-800" onClick={handleEdit}>
                  <MdEdit size={20} className="mr-1" />
                  Edit
                </button>
                <button className="flex items-center text-sm text-red-500 hover:text-red-600 ml-2" onClick={handleDelete}>
                  <MdDeleteOutline size={20} className="mr-1" />
                  Delete
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Delete confirmation popup */}
      {showDeleteConfirmation && (
        <PostDeletionPopup onDelete={onDelete} onCancel={() => setShowDeleteConfirmation(false)} />
      )}
    </div>
  );
}
