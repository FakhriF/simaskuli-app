import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdDeleteOutline, MdThumbUp } from 'react-icons/md';
import ThreadDeletionPopup from './ThreadDeletionPopup';

export default function ThreadCard({ thread, isCreatedByLoggedInUser }) {
    const router = useRouter();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/forum/${thread.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                router.refresh();
                router.push('/forum');
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
        <>
            <div className="bg-white border border-gray-300 shadow-md rounded-md p-4 mb-4 flex items-end justify-between">
                <div className="flex items-center">
                    <div className={`bg-${thread.user?.role === 'student' ? 'blue' : thread.user?.role === 'teacher' ? 'red' : 'white'}-500 rounded-full p-1 mr-3`}>
                        <img src={thread.user?.profile_url} className="w-12 h-12 rounded-full" />
                    </div>
                    <Link href={`/forum/${thread.id}`}>
                        <div>
                            <h2 className="text-xl font-semibold">{thread.title}</h2>
                            <p className="text-gray-500 text-sm">
                                By {thread.user?.name}, {format(new Date(thread.created_at), 'MMM dd, yyyy')}
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer">
                        <MdThumbUp className="w-5 h-5" />
                        <span>Like</span>
                    </div>

                    {isCreatedByLoggedInUser && (
                        <button
                            className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition duration-200 ease-in-out cursor-pointer"
                            onClick={() => setShowDeleteConfirmation(true)}
                        >
                            <MdDeleteOutline />
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
            </div>
        </>
    );
}
