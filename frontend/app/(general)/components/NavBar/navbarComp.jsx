"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteToken, deleteUserData, getToken } from "../../actions";
import { LoadingModal } from "../loading";

export default function NavBarDropDown({ image }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const logout = async () => {
        setLoading(true);
        try {
            const token = await getToken();

            await fetch(`${process.env.BACKEND_URL}/api/logout`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                if (response.status === 200) {
                    // remove token and redirect to login
                    deleteToken();
                    router.push("/login");
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const user = {
        image_url: image
            ? image
            : "https://www.pngall.com/wp-content/uploads/5/Profile.png",
    };

    // console.log(image);

    return (
        // <nav className="flex items-center justify-between p-4 bg-slate-800 text-white">
        // {loading && <LoadingModal showModal={loading} />}
        /* <div className="flex items-center gap-8">
                <div className="flex items-center">
                    <Link
                        className="ml-4 font-bold text-2xl hover:text-gray-300"
                        href="/"
                    >
                        SI-MASKULI
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/course"
                        className="hover:text-gray-300 font-bold"
                    >
                        Course
                    </Link>
                    <Link
                        href="/forum"
                        className="hover:text-gray-300 font-bold"
                    >
                        Forum
                    </Link>
                </div>
            </div> */

        <div className="relative">
            {loading && <LoadingModal showModal={loading} />}
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 text-white"
            >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700">
                    <img
                        src={user.image_url}
                        alt="user"
                        className="rounded-full"
                    />
                </div>
            </button>
            {isOpen && (
                <div className="absolute right-0 z-10 bg-white rounded-md shadow-md">
                    <ul className="p-4 text-gray-800">
                        <Link href="/profile" onClick={toggleDropdown}>
                            <li className="px-4 py-2 hover:bg-gray-200 rounded-md">
                                My Account
                            </li>
                        </Link>
                        <li className="px-4 py-2 hover:bg-red-200 hover:text-red-600 cursor-pointer rounded-md">
                            <div onClick={logout}>Logout</div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
        // </nav>
    );
}
