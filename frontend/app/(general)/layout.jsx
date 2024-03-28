import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const cookieStore = cookies();
    const hasCookie = cookieStore.has("token");

    if (!hasCookie) {
        redirect("/login");
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
