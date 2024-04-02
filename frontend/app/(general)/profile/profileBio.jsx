import Link from "next/link";
import ProfileElement from "./profileElement";
import { useRouter } from "next/navigation";

export default function ProfileBioElement({ user }) {
    const userData = {
        name: user.name,
        email: user.email,
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="bg-gray-100 p-8 w-full">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold">Hi, {userData.name}!</h1>
                    <p className="text-gray-500">{userData.email}</p>
                </div>
            </div>
            <ProfileElement user={user} />
        </div>
    );
    // }
}
