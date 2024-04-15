import { format } from 'date-fns';
import Link from 'next/link';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';

export const metadata = {
  title: "Thread",
};

export default async function Thread() {
    const res = await fetch('http://localhost:8000/api/forum');
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        const userId = data[i].user_id;
        const userRes = await fetch(`http://localhost:8000/api/users/${userId}`);
        const userData = await userRes.json();
        data[i].user = userData;
    }

    return (
        <div className="space-y-6">
            {data.map((thread) => (
            <Link href={`/forum/${thread.id}`} key={thread.id}>
                <div className="block p-6 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 flex items-end justify-between transition duration-200 ease-in-out transform hover:-translate-y-1">
                <div className="flex-grow">
                    <h5 className="mb-2 text-xl font-semibold text-gray-900">
                    {thread.title}
                    </h5>
                    <p className="font-normal text-gray-500">
                    By {thread.user?.name}, {format(new Date(thread.created_at), 'MMM dd, yyyy')}
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-gray-500 hover:text-cyan-700 transition duration-200 ease-in-out">
                    <AiOutlineLike className="w-5 h-5" />
                    <span>Like</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                    <AiOutlineMessage className="w-5 h-5"/>
                    <span>Views</span>
                    </div>
                </div>
                </div>
            </Link>
            ))}
        </div>
    );
    }
