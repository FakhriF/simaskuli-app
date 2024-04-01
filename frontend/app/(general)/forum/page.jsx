
import { format } from "date-fns";
import Link from "next/link";
import { AiOutlineLike, AiOutlineMessage } from "react-icons/ai";

// export const metadata = {
//     title: "Forum",
// };

export default async function ForumThread({ params }) {

    const res = await fetch('http://localhost:8000/api/forum');
    const data = await res.json();
    console.log('Forum Data:', data);

    for (let i = 0; i < data.length; i++) {
        const userId = data[i].user_id;
        const userRes = await fetch(`http://localhost:8000/api/users/${userId}`);
        const userData = await userRes.json();
        data[i].user = userData;
    }

    return (
        <main className="py-8">

            <div className="max-w-7xl mx-auto px-6 space-y-3 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center space-x-1 mb-4">
                    <div className="flex space-x-2 ">
                        <button className="text-black border border-black rounded-md p-2">
                            Home
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-black rounded-md p-2"
                        />
                    </div>
                </div>

                <h1 className="text-3xl font-bold">Forum</h1>

                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm">
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ms-0 border border-e-0 border-gray-600 rounded-s-lg hover:bg-gray-100 "
                            >
                                Previous
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 border border-gray-600 hover:bg-gray-100"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 border border-gray-600 hover:bg-gray-100"
                            >
                                2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-current="page"
                                className="flex items-center justify-center px-3 h-8 border border-gray-600 hover:bg-gray-100"
                            >
                                3
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 border border-gray-600 hover:bg-gray-100"
                            >
                                ...
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 border border-gray-600 hover:bg-gray-100"
                            >
                                5
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ms-0 border border-s-0 border-gray-600 rounded-e-lg hover:bg-gray-100"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
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
                
{/* 
                    <a
                        href="#"
                        className="block p-6 border border-black rounded-md shadow hover:bg-gray-100 flex items-end justify-between"
                    >
                        <div className="flex-grow">
                            <h5 className="mb-2 text-xl font-bold  ">
                                Lorem Ipsum
                            </h5>
                            <p className="font-normal text-gray-6000 ">
                                By Anon, December 31, 2024
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span className="text-sm text-gray-400">
                                1 replies
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                                <path
                                    fillRule="evenodd"
                                    d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span className="text-sm text-gray-400">
                                99 views
                            </span>
                        </div>
                    </a> */}
                
            </div>
        </main>
    );
}
