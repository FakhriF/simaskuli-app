import { useState } from "react";
import ThreadCreationForm from "./threadCreationForm";

export const metadata = {
    title: "Create Forum Thread",
};

export default function ThreadCreation({ user }) {
    const [showForm, setShowForm] = useState(false);

    const handleClick = async () => {
        setShowForm(true);
    };

    return (
        <div>
            <button  
                className="text-white bg-blue-500 border border-gray-300 rounded-md px-3 py-2 hover:bg-blue-300" 
                onClick={handleClick}
            >
                Create New Thread
            </button>
            {showForm && <ThreadCreationForm user={user} onCancel={() => setShowForm(false)} />}
        </div>
    );
}
