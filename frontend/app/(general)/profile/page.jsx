import { redirect } from "next/navigation";
import { getToken } from "../actions";
import ProfileBioElement from "./profileBio";

export const metadata = {
    title: "Profile",
};

export default async function ProfilePage() {
    // const cookieStore = cookies();
    // const hasCookie = cookieStore.has("token");

    // if (!hasCookie) {
    //     redirect("/login");
    // }

    // else {
    const token = await getToken();

    // console.log(token);

    const response = await fetch(`${process.env.BACKEND_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        return redirect("/login");
    }

    const data = await response.json();

    // console.log(data);

    return (
        <div>
            <ProfileBioElement user={data} />
        </div>
    );
    // }
}
