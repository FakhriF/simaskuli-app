'use client';

import { getToken } from "@/app/(general)/actions";
import { useEffect, useState } from "react";
import Thread from "./thread";
import ThreadCreation from "./threadCreation";

export default function Forum() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = await getToken();
            const response = await fetch("http://localhost:8000/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const userData = await response.json();
            setUserData(userData);
        };

        fetchData();
    }, []);


    return (
        <main className="py-8">
            <div className="max-w-7xl mx-auto px-6 space-y-3 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center space-x-1 mb-4">
                    <div className="flex space-x-2">
                        <button className="text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-200">
                            Home
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <h1 className="text-3xl font-bold">Forum</h1>
                <Thread user={userData} />
                <ThreadCreation user={userData} />
            </div>
        </main>
    );
}
