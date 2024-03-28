"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { addToken } from "@/app/(general)/actions";
import { LoadingModal } from "@/app/(general)/components/loading";

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

    // Error Notification
    const [error, setError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        // set all error to empty
        setError("");
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPassError("");

        if (password !== confirmPass) {
            setConfirmPassError("Password tidak sama");
            return;
        }

        try {
            const response = await axios
                .post("http://localhost:8000/api/register", {
                    name: name,
                    email: email,
                    password: password,
                    birthDate: birthDate,
                    role: "student",
                })
                .then((res) => {
                    if (res.status === 201) {
                        addToken(res.data.access_token);
                        // console.log(res.data.access_token);
                        router.push("/profile");
                    } else {
                        setError(res.data.message);
                    }
                });
        } catch (error) {
            console.log(error);
            if (error.response.data.errors.name) {
                setNameError(error.response.data.errors.name);
            } else if (error.response.data.errors.email) {
                setEmailError(error.response.data.errors.email);
            } else if (error.response.data.errors.password[0]) {
                setPasswordError(error.response.data.errors.password[0]);
            } else {
                setError(error.response.data.message);
            }

            setLoading(false);

        }
    };

    return (
        <form
            className="bg-white shadow-md rounded-lg p-4 sm:p-12 sm:w-[600px]"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {loading && <LoadingModal showModal={loading} />}
            <h1 className="text-2xl font-semibold mb-4">Student Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block mb-2">Nama</label>
                <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg ${
                        nameError && "border-red-500"
                    }`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {nameError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                )}
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
                    className={`w-full px-4 py-2 border rounded-lg ${
                        emailError && "border-red-500"
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {emailError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    className={`w-full px-4 py-2 border rounded-lg ${
                        passwordError && "border-red-500"
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {passwordError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                )}
            </div>
            <div className="mb-8">
                <label className="block mb-2">Konfirmasi Password</label>
                <input
                    type="password"
                    className={`w-full px-4 py-2 border rounded-lg ${
                        confirmPassError && "border-red-500"
                    }`}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                />
                {confirmPassError && (
                    <p className="text-red-500 text-sm">{confirmPassError}</p>
                )}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                Register
            </button>
        </form>
    );
}


function TeacherRegisterForm() {
    const [birthDate, setBirthDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    // Error Notification
    const [error, setError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        // set all error to empty
        setError("");
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPassError("");

        if (password !== confirmPass) {
            setConfirmPassError("Password tidak sama");
            return;
        }

        try {
            const response = await axios
                .post("http://localhost:8000/api/register", {
                    name: name,
                    email: email,
                    password: password,
                    birthDate: birthDate,
                    role: "teacher",
                })
                .then((res) => {
                    if (res.status === 201) {
                        addToken(res.data.access_token);
                        // console.log(res.data.access_token);
                        router.push("/profile");
                    } else {
                        setError(res.data.message);
                    }
                });
        } catch (error) {
            console.log(error);
            if (error.response.data.errors.name) {
                setNameError(error.response.data.errors.name);
            } else if (error.response.data.errors.email) {
                setEmailError(error.response.data.errors.email);
            } else if (error.response.data.errors.password[0]) {
                setPasswordError(error.response.data.errors.password[0]);
            } else {
                setError(error.response.data.message);
            }

            setLoading(false);

        }
    };

    return (
        <form
            className="bg-white shadow-md rounded-lg p-4 sm:p-12 sm:w-[600px]"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {loading && <LoadingModal showModal={loading} />}
            <h1 className="text-2xl font-semibold mb-4">Student Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block mb-2">Nama</label>
                <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg ${
                        nameError && "border-red-500"
                    }`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {nameError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                )}
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
                    className={`w-full px-4 py-2 border rounded-lg ${
                        emailError && "border-red-500"
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {emailError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    className={`w-full px-4 py-2 border rounded-lg ${
                        passwordError && "border-red-500"
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {passwordError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                )}
            </div>
            <div className="mb-8">
                <label className="block mb-2">Konfirmasi Password</label>
                <input
                    type="password"
                    className={`w-full px-4 py-2 border rounded-lg ${
                        confirmPassError && "border-red-500"
                    }`}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                />
                {confirmPassError && (
                    <p className="text-red-500 text-sm">{confirmPassError}</p>
                )}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                Register
            </button>
        </form>
    );
}