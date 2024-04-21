'use client'

import { useState } from "react";
import { getToken } from "../actions";
import ThreadCreationForm from "./threadCreationForm";

export const metadata = {
    title: "Create Forum Thread",
};

export default function CreateThread() {
    const [showForm, setShowForm] = useState(false); // State to track whether to show the form or not
    const [userData, setUserData] = useState({}); // Initialize userData as an empty object

    const handleClick = async () => {
        setShowForm(true); // Show the form immediately
        const token = await getToken();

        const response = await fetch("http://localhost:8000/api/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const userData = await response.json();
        setUserData(userData); // Set user data
    };

    return (
        <div>
            {!showForm && (
                <button  
                    className="text-white bg-blue-500 border border-gray-300 rounded-md px-3 py-2 hover:bg-blue-300" 
                    onClick={handleClick}
                    >
                    Create New Thread
                </button>
            )}
            {showForm && <ThreadCreationForm user={userData} />}
        </div>
    );
}

