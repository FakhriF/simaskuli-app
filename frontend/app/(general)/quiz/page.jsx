'use client';

import { getToken } from "@/app/(general)/actions";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuizPage() {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken();
                const response = await fetch("http://localhost:8000/api/quiz", { // Endpoint untuk mengambil data kuis
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuizData(data);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="py-8">
            <div className="max-w-7xl mx-auto px-6 space-y-3 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center space-x-1 mb-4">
                </div>
                <h1 className="text-3xl font-bold">Quiz</h1>
            </div>
            {quizData.map((quizItem) => (
                <Link key={quizItem.id} href={`/quiz/${quizItem.id}/questions`}>
                    <div className="bg-white border border-gray-300 shadow-md rounded-md p-4 mb-4 flex items-end justify-between">
                        <div className="flex items-center">
                            <div className={`bg-500 rounded-full p-1 mr-3`}>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{quizItem.title}</h2>
                                <p className="text-gray-500 text-sm">{quizItem.description}</p>
                                <p className="text-gray-500 text-sm">Due Date: {quizItem.dueDate}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </main>
    );
}
