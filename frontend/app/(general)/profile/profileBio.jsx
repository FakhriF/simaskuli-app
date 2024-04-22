import Link from "next/link";
import ProfileElement from "./profileElement";
import { useRouter } from "next/navigation";

export default function ProfileBioElement({ user }) {
    const userData = {
        name: user.name,
        email: user.email,
        image_url: user.profile_url
            ? user.profile_url
            : "https://www.pngall.com/wp-content/uploads/5/Profile.png",
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="bg-gray-100 p-8 w-full">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-row items-center gap-4 w-full">
                        <img
                            src={userData.image_url}
                            alt="user"
                            className="w-24 h-24 rounded-full"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">
                                Hi, {userData.name}!
                            </h1>
                            <p className="text-gray-500">{userData.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileElement user={user} />
        </div>
    );
    // }
}
