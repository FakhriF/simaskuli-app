"use client";

import Link from "next/link";
import ProfileElement from "./profileElement";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProfileBioElement() {
    const [userData, setUserData] = useState({});
    const [isFetch, setIsFetch] = useState(false);

    const router = useRouter();

    // if logged in, check the user_id in local storage
    const userId =
        typeof window !== "undefined"
            ? window.localStorage.getItem("id_user")
            : null;

    if (!userId) {
        // if not logged in, redirect to login page
        router.push("/login");
    }

    useEffect(() => {
        if (!isFetch) {
            axios
                .get(`http://localhost:8000/api/users/${userId}`)
                .then((response) => {
                    // set the data in the state
                    setUserData(response.data);
                    console.log(response.data);
                });
        }
        setIsFetch(true);
        // get the user data from the backend
    });

    // if logged in, render the profile element

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="bg-gray-100 p-8 w-full">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold">
                        Hai, {userData.name}!
                    </h1>
                    <p className="text-gray-500">{userData.email}</p>
                </div>
            </div>
            <ProfileElement />
        </div>
    );
}
