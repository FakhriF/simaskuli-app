"use client";

import { useState } from "react";
import { getToken } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileSection({ user }) {
    const [name, setName] = useState(user.name);
    const [profile_url, setProfileUrl] = useState(user.profile_url);
    const [birthDate, setBirthDate] = useState(user.birthDate);

    const [editing, setEditing] = useState(false);

    const router = useRouter();

    const saveChanges = async () => {
        const token = await getToken();

        const response = await fetch(`${process.env.BACKEND_URL}/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name, profile_url, birthDate }),
        })
            .then((response) => {
                router.refresh();
                setEditing(false);
                toast.success("Profile updated successfully");
                toast.info("Your data will be updated soon");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-full p-4">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
            <form className="space-y-4 mt-4">
                <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        disabled={!editing}
                        className="border p-2 rounded-md w-full"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="image">Profile Image Link</label>
                    <input
                        type="text"
                        id="image"
                        onChange={(e) => setProfileUrl(e.target.value)}
                        value={profile_url}
                        disabled={!editing}
                        className="border p-2 rounded-md w-full"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="birthdate">Birthdate</label>
                    <input
                        type="date"
                        id="birthdate"
                        onChange={(e) => setBirthDate(e.target.value)}
                        value={birthDate}
                        disabled={!editing}
                        className="border p-2 rounded-md w-full"
                    />
                </div>
            </form>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    onClick={() => {
                        setEditing(!editing);
                    }}
                >
                    {editing ? "Cancel" : "Edit Profile"}
                </button>
                {editing && (
                    <button
                        className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md ml-2"
                        onClick={() => {
                            saveChanges();
                        }}
                    >
                        Save
                    </button>
                )}
            </div>
        </div>
    );
}
