import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdEdit, MdReply, MdThumbUp } from 'react-icons/md';

export default function OriginalPost({ forumPost, formattedDate, user }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(forumPost.title);
	const [editedContent, setEditedContent] = useState(forumPost.content);

  const router = useRouter();

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { title: editedTitle, content: editedContent };
		try {
			const response = await fetch(`${process.env.BACKEND_URL}/forum/${forumPost.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.ok) {
				// Redirect to the updated post
				router.push(`/forum/${forumPost.id}`);
			}
			setIsEditing(false);
		} catch (error) {
			console.error("Error updating post:", error);
		}
	};


	return (
		<>
			<div className="bg-white shadow-md rounded-lg p-6 relative">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center">
						<div className={`bg-${forumPost.user?.role === 'student' ? 'blue' : forumPost.user?.role === 'teacher' ? 'red' : 'white'}-500 rounded-full p-1 mr-3`}>
							<img src={forumPost.user.profile_url} className="w-12 h-12 rounded-full" alt="Profile" />
						</div>
						<div>
							<h2 className="text-lg font-medium text-gray-900">{forumPost.user.name}</h2>
							<p className={`text-sm capitalize ${forumPost.user?.role === 'student' ? 'text-blue-600' : forumPost.user?.role === 'teacher' ? 'text-red-600' : 'text-gray-600'}`}>{forumPost.user?.role}</p>
						</div>
					</div>
					<p className="text-sm text-gray-600">{formattedDate}</p>
				</div>
				{isEditing ? (
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={editedTitle}
							onChange={(e) => setEditedTitle(e.target.value)}
							className="mb-2 border border-gray-300 p-2 rounded-md w-full"
							placeholder="Title"
							required
						/>
						<textarea
							value={editedContent}
							onChange={(e) => setEditedContent(e.target.value)}
							className="mb-4 border border-gray-300 p-2 rounded-md w-full"
							rows={4}
							placeholder="Content"
							required
						/>
						<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
							Save
						</button>
					</form>
				) : (
					<>
						<p className="text-base text-gray-700">{forumPost.content}</p>
						{user && user.id === forumPost.user.id && ( 
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
									<button className="flex items-center text-sm text-gray-500 hover:text-gray-800" onClick={handleEditClick}>
										<MdEdit size={20} className="mr-1" />
										Edit
									</button>
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
}
