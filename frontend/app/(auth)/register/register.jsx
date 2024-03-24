"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterForm() {
    const [tab, setTab] = useState("student");

    return (
        <div className="flex flex-col items-center w-full min-h-screen items-center justify-center bg-gray-100">
            <div className="flex justify-center w-full">
                <button
                    className={`py-2 px-4 rounded-t-lg ${
                        tab === "student"
                            ? "bg-blue-500 text-white"
                            : "bg-white text-gray-600"
                    }`}
                    onClick={() => setTab("student")}
                >
                    Student
                </button>
                <button
                    className={`py-2 px-4 rounded-t-lg ${
                        tab === "teacher"
                            ? "bg-blue-500 text-white"
                            : "bg-white text-gray-600"
                    }`}
                    onClick={() => setTab("teacher")}
                >
                    Teacher
                </button>
            </div>
            {tab === "student" && <StudentRegisterForm />}
            {tab === "teacher" && <TeacherRegisterForm />}
            <p className="text-gray-500 mt-4">
                Sudah punya akun?{" "}
                <Link
                    href="/login"
                    className="text-blue-500 hover:text-blue-700"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}

function StudentRegisterForm() {
    const [birthDate, setBirthDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/users",
                {
                    name: name,
                    email: email,
                    password: password,
                    birthdate: birthDate,
                    role: "student",
                }
            );
            if (response.status === 201) {
                // set the token in local storage
                localStorage.setItem("id_user", response.data.user.id);

                router.push("/profile");
            } else {
                // setError(response.data.message);
            }
        } catch (error) {
            // setError(error.response.data.message);
        }
    };

    return (
        <form
            className="bg-white shadow-md rounded-lg p-4 sm:p-12 sm:w-[600px]"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold mb-4">Student Register</h1>
            <div className="mb-4">
                <label className="block mb-2">Nama</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Tanggal Lahir</label>
                <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                />
            </div>
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
            <div className="mb-8">
                <label className="block mb-2">Konfirmasi Password</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                Register
            </button>
        </form>
    );
}

function TeacherRegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/api/users",
                {
                    name: name,
                    email: email,
                    password: password,
                    birthdate: birthDate,
                    role: "teacher",
                }
            );
            console.log(response.status);

            if (response.status === 201) {
                // set the token in local storage
                localStorage.setItem("id_user", response.data.data.id);
                router.push("/profile");
            } else {
                // setError(response.data.message);
            }
        } catch (error) {
            // setError(error.response.data.message);
        }
    };

    return (
        <form
            className="bg-white shadow-md rounded-lg p-4 sm:p-12 sm:w-[600px]"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold mb-4">Teacher Register</h1>
            <div className="mb-4">
                <label className="block mb-2">Nama</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Tanggal Lahir</label>
                <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                />
            </div>
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
            <div className="mb-8">
                <label className="block mb-2">Konfirmasi Password</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                Register
            </button>
        </form>
    );
}
