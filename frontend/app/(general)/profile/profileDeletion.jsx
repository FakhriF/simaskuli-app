"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingModal } from "../components/loading";
import { deleteToken, getToken } from "../actions";

export default function ProfileDeletionPage({ email }) {
    const [emailInput, setEmailInput] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleDelete = async () => {
        setLoading(true);

        if (emailInput !== email) {
            setError("Email tidak sesuai");
            setLoading(false);
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
                    setLoading(false);
                }
            });
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
            setLoading(false);
        }
    };

    return (
        <div className="w-full p-4">
            {loading && <LoadingModal showModal={loading} />}
            <h1 className="text-2xl font-bold mb-4">Delete Profile</h1>
            <p className="text-gray-500">
                Pada halaman ini, Anda dapat menghapus profil akun Anda. Anda
                tidak dapat mengembalikan akun anda apabila Anda menghapusnya.
            </p>

            {/* create modal to confirm */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-5">
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
