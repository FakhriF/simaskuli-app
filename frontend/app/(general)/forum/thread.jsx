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
        <div>
            {data.map((thread) => (
                <div className="space-y-6" key={thread.id}>
                    <Link href={`/forum/${thread.id}`}>
                        <div className="block p-6 border border-black rounded-md shadow-md hover:bg-gray-100 flex items-end justify-between">
                            <div className="flex-grow">
                                <h5 className="mb-2 text-xl font-bold">
                                    {thread.title}
                                </h5>
                                <p className="font-normal text-gray-6000">
                                    By {thread.user?.name}, {format(new Date(thread.created_at), 'MMMM dd, yyyy')}
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1 hover:text-cyan-700">
                                    <AiOutlineLike />
                                    <span>Like</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <AiOutlineMessage />
                                    <span>Views</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
