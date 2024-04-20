import { getToken } from "../actions";
import ThreadCreationForm from "./threadCreationForm";

export const metadata = {
    title: "Create Forum Thread",
};

export default async function CreateThread() {
    const token = await getToken();


    const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const userData = await response.json();

    return (
        <div>
            <h1>Create Forum Thread</h1>
            < ThreadCreationForm user={userData} />
        </div>
    );
}