import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "./components/NavBar/navbar";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
    const cookieStore = cookies();
    const hasCookie = cookieStore.has("token");

    if (!hasCookie) {
        redirect("/login");
    } else {
        const token = cookieStore.get("token").value;

        await fetch(`http://localhost:8000/api/user/session/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.status === 404) {
                redirect("/login");
            }
        });
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
