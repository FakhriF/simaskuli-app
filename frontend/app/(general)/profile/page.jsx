import Link from "next/link";
import ProfileElement from "./profileElement";
import ProfileBioElement from "./profileBio";

export const metadata = {
    title: "Profile",
};

export default async function ProfilePage() {
    return (
        <div>
            <ProfileBioElement />
        </div>
    );
}
