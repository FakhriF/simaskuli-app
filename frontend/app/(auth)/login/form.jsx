"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { addToken, addUserData } from "@/app/(general)/actions";
import { LoadingModal } from "@/app/(general)/components/loading";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // router.push("/profile");
        setLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                {
                    email: email,
                    password: password,
                    // remember: remember,
                }
            );
            if (response.status === 200) {
                addToken(response.data.access_token);

                router.push("/profile");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError(error.response.data.message);

            setLoading(false);
        }
    };

    return (
        <form
            className="bg-white shadow-md rounded-lg p-4 sm:p-12 sm:w-[600px]"
            onSubmit={handleSubmit}
        >
            {loading && <LoadingModal showModal={loading} />}
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
            {/* Remember me */}
            {/* <div className="mb-4 flex items-center">
                <input
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                    name="remember"
                    onChange={(e) => {
                        setRemember(e.target.checked);
                    }}
                />
                <label className="ml-2 text-sm">Remember me</label>
            </div> */}
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
