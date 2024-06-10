"use client";
import React, { useState, useEffect } from "react";

export default function Quiz({ params }) {
    console.log(params);
    const [questions, setQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Fungsi untuk menangani klik opsi
    const handleOptionClick = (option) => {
        // Jika opsi yang dipilih sama dengan opsi yang diklik, maka atur kembali ke null
        if (selectedOption === option) {
            setSelectedOption(null);
        } else {
            // Jika tidak, atur opsi yang dipilih ke opsi yang diklik
            setSelectedOption(option);
        }
    };

    useEffect(() => {
        const fetchQuestionsByQuizId = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/api/quiz/${params.id}/questions`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const questions = await response.json();
                setQuestions(questions);
            } catch (error) {
                console.error("Error fetching questions data:", error);
            }
        };

        fetchQuestionsByQuizId();
    }, [params]);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) =>
            Math.min(prevIndex + 1, questions.length - 1)
        );
        setSelectedOption(null); // Reset selected option when moving to next question
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setSelectedOption(null); // Reset selected option when moving to previous question
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <div>
                <h1 className="text-xl font-bold mx-4 my-4">
                    {questions[currentQuestionIndex]?.quiz.title}
                </h1>
                <h2 className="text-xl font-bold">
                    {questions[currentQuestionIndex]?.question_text}
                </h2>
                <div
                    className={`${
                        selectedOption === 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    } font-bold py-2 px-4 rounded my-4 cursor-pointer`}
                    onClick={() => handleOptionClick(1)}
                >
                    <button>{questions[currentQuestionIndex]?.option1}</button>
                </div>
                <div
                    className={`${
                        selectedOption === 2
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    } font-bold py-2 px-4 rounded my-4 cursor-pointer`}
                    onClick={() => handleOptionClick(2)}
                >
                    <button>{questions[currentQuestionIndex]?.option2}</button>
                </div>
                <div
                    className={`${
                        selectedOption === 3
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    } font-bold py-2 px-4 rounded my-4 cursor-pointer`}
                    onClick={() => handleOptionClick(3)}
                >
                    <button>{questions[currentQuestionIndex]?.option3}</button>
                </div>
                <div
                    className={`${
                        selectedOption === 4
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    } font-bold py-2 px-4 rounded my-4 cursor-pointer`}
                    onClick={() => handleOptionClick(4)}
                >
                    <button>{questions[currentQuestionIndex]?.option4}</button>
                </div>
                <div className="flex justify-between px-4">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        disabled={currentQuestionIndex === questions.length - 1}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
