"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // router.push("/profile");

        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                {
                    email: email,
                    password: password,
                }
            );
            if (response.status === 200) {
                // set the token in local storage
                localStorage.setItem("id_user", response.data.user.id);

                router.push("/profile");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <form
            className="bg-white shadow-md rounded-lg p-4 sm:p-12 sm:w-[600px]"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="text-left mb-4 text-sm">
                <a
                    href="/login/forgot"
                    className="text-blue-500 hover:text-blue-700"
                >
                    Lupa Password?
                </a>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                Login
            </button>
        </form>
    );
}
