"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteToken, deleteUserData, getToken } from "../actions";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const router = useRouter();

    const logout = async () => {
        try {
            const token = await getToken();

            await fetch("http://localhost:8000/api/logout", {
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

    return (
        <nav className="flex items-center justify-between p-4 bg-slate-800 text-white">
            <div className="flex items-center">
                {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
                <span className="ml-4 font-bold text-2xl">SI-MASKULI</span>
            </div>
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 text-white"
                >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700">
                        <p className="font-bold text-2xl">M</p>
                    </div>
                </button>
                {isOpen && (
                    <div className="absolute right-0 z-10 bg-white rounded-md shadow-md">
                        <ul className="p-4 text-gray-800">
                            <li className="px-4 py-2 hover:bg-gray-200 rounded-md">
                                <Link href="/profile">My Account</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-200 hover:text-red-600 cursor-pointer rounded-md">
                                <div onClick={logout}>Logout</div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
