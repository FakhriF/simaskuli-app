"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function ProfileElement() {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    console.log(pathname);

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
            {pathname === "/profile/delete" && <ProfileDeletionPage />}
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

function ProfileDeletionPage() {
    const [input, setInput] = useState("");
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

    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Delete Profile</h1>
            <p className="text-gray-500">
                Pada halaman ini, Anda dapat menghapus profil akun Anda. Anda
                tidak dapat mengembalikan akun anda apabila Anda menghapusnya.
            </p>
            <p className="text-gray-500 mt-4">
                Apakah Anda yakin ingin menghapus profil akun Anda?
            </p>
            <p className="text-gray-500 mt-4">
                Silahkan ketik ulang: {"  "}
                <span className="text-red-500">{userData.email}</span>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    // value={input}
                    // onChange={(e) => setInput(e.target.value)}
                />
            </p>
            <button className="outline outline-1 outline-red-500 text-red-500 py-2 px-4 rounded-lg mt-4 text-sm">
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
