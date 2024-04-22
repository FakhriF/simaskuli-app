import { MdEdit, MdReply, MdThumbUp } from 'react-icons/md';

export default function OriginalPost({ forumPost, formattedDate }) {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
          <div className={`bg-${forumPost.user?.role === 'student' ? 'blue' : forumPost.user?.role === 'teacher' ? 'red' : 'white'}-500 rounded-full p-1 mr-3`}>
            <img src = {forumPost.user.profile_url} className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">{forumPost.user.name}</h2>
              <p className={`text-sm capitalize ${forumPost.user?.role === 'student' ? 'text-blue-600' : forumPost.user?.role === 'teacher' ? 'text-red-600' : 'text-gray-600'}`}>{forumPost.user?.role}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>
        <p className="text-base text-gray-700">{forumPost.content}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex">
            <button className="flex items-center text-sm text-blue-500 hover:text-blue-600 mr-4">
              <MdThumbUp size={20} className="mr-1" />
              Like
            </button>
            <button className="flex items-center text-sm text-blue-500 hover:text-blue-600">
              <MdReply size={20} className="mr-1" />
              Reply
            </button>
          </div>
          <div className="flex items-center">
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-800">
              <MdEdit size={20} className="mr-1" />
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
