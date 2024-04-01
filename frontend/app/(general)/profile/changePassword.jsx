"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "../actions";

export default function ChangePasswordPage() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordError, setPasswordError] = useState("");

    const changePassword = async () => {
        setPasswordsMatch(true);

        if (newPassword.length < 8) {
            setPasswordsMatch(false);
            setPasswordError("Password must be at least 8 characters long");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setPasswordsMatch(false);
            setPasswordError("Passwords do not match");
            return;
        }

        const token = await getToken();

        const response = await fetch(
            "http://localhost:8000/api/user/password",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ oldPassword, newPassword }),
            }
        )
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Password changed successfully");
                } else if (response.status === 401) {
                    toast.error("Old Password is Incorrect");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-full p-4">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Change Password</h1>
            <form className="space-y-4 mt-4">
                <div className="space-y-2">
                    <label htmlFor="name">Old Password</label>
                    <input
                        type="password"
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="border p-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="birthdate">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={`border p-2 rounded-md w-full ${
                            !passwordsMatch &&
                            passwordError !== "Passwords do not match"
                                ? "border-red-500"
                                : ""
                        }`}
                        required
                    />
                    {!passwordsMatch &&
                        passwordError !== "Passwords do not match" && (
                            <p className="text-red-500 text-sm">
                                {passwordError}
                            </p>
                        )}
                </div>
                <div className="space-y-2">
                    <label htmlFor="birthdate">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className={`border p-2 rounded-md w-full ${
                            !passwordsMatch &&
                            passwordError == "Passwords do not match"
                                ? "border-red-500"
                                : ""
                        }`}
                        required
                    />
                    {!passwordsMatch &&
                        passwordError == "Passwords do not match" && (
                            <p className="text-red-500 text-sm">
                                {passwordError}
                            </p>
                        )}
                </div>
            </form>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    onClick={() => {
                        changePassword();
                    }}
                >
                    Change Password
                </button>
            </div>
        </div>
    );
}
