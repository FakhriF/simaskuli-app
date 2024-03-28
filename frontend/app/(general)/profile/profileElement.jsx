"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { deleteToken, getToken } from "../actions";

export default function ProfileElement({ user }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // console.log(pathname);

    return (
        <div className="flex gap-4 mt-8 max-w-5xl mx-auto">
            <nav className="bg-white p-4 shadow-md w-1/4 max-h-min">
                <h2 className="text-lg text-gray-500 font-bold mb-4">
                    My Account
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/profile"
                            className={`hover:text-blue-500 ${
                                pathname === "/profile" && "text-blue-500"
                            }`}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile/settings"
                            //    if hover txt-blue, if search params settings text-blue
                            className={`hover:text-blue-500 ${
                                pathname === "/profile/settings" &&
                                "text-blue-500"
                            }`}
                        >
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile/delete"
                            className={`hover:text-blue-500 ${
                                pathname === "/profile/delete" &&
                                "text-blue-500"
                            }`}
                        >
                            Delete Profile
                        </Link>
                    </li>
                </ul>

                <h2 className="text-lg text-gray-500 font-bold mt-8 mb-4">
                    Courses
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/profile/course"
                            className={`hover:text-blue-500 ${
                                pathname === "/profile/course" &&
                                "text-blue-500"
                            }`}
                        >
                            Course List
                        </Link>
                    </li>
                </ul>
            </nav>
            {pathname === "/profile" && <ProfileSection />}
            {pathname === "/profile/settings" && <ProfileSettingsPage />}
            {pathname === "/profile/delete" && (
                <ProfileDeletionPage email={user.email} />
            )}
            {pathname === "/profile/course" && <ProfileCoursePage />}
        </div>
    );
}

function ProfileSection() {
    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">My Profile</h1>
            <p className="text-gray-500">
                This context is the profile page of a user. Here, the user can
                update their personal information such as name, email, and
                password. Also, the user can access their courses and payment
                history.
            </p>
        </div>
    );
}

function ProfileSettingsPage() {
    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Setting Profile</h1>
            <p className="text-gray-500">
                This context is the setting profile page of a user. Here, the
                user can update their personal information such as name, email,
                and password.
            </p>
        </div>
    );
}

function ProfileDeletionPage({ email }) {
    const [emailInput, setEmailInput] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");

    
    const handleDelete = async () => {
        if (emailInput !== email) {
            setError("Email tidak sesuai");
            return;
        }

        try {
            const token = await getToken();

            await fetch("http://localhost:8000/api/user", {
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
                } else {
                    setError(response.data.message);
                }
            });
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
        }
    };

    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Delete Profile</h1>
            <p className="text-gray-500">
                Pada halaman ini, Anda dapat menghapus profil akun Anda. Anda
                tidak dapat mengembalikan akun anda apabila Anda menghapusnya.
            </p>

            {/* create modal to confirm */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-bold">Hapus Profil?</p>
                        <p className="text-gray-500 mt-4">
                            Silahkan ketik ulang: {"  "}
                            <span className="text-red-500">{email}</span>
                            <input
                                type="text"
                                className={`w-full px-4 py-2 border rounded-lg ${
                                    error && "border-red-500"
                                }`}
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                            />
                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="outline outline-1 outline-gray-300 text-gray-500 px-4 py-2 rounded-lg mr-2"
                                onClick={() => {
                                    setShowModal(false),
                                        setError(""),
                                        setEmailInput("");
                                }}
                            >
                                Batal
                            </button>
                            <button
                                className="outline outline-1 outline-red-500 text-red-500 px-4 py-2 rounded-lg"
                                onClick={handleDelete}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <button
                className="outline outline-1 outline-red-500 text-red-500 py-2 px-4 rounded-lg mt-4 text-sm"
                onClick={() => setShowModal(true)}
            >
                Delete Profile
            </button>
        </div>
    );
}

function ProfileCoursePage() {
    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Course</h1>
            <p className="text-gray-500">
                This context is the course page of a user. Here, the user can
                access their courses and payment history. You can also access
                the course detail page.
            </p>
        </div>
    );
}
