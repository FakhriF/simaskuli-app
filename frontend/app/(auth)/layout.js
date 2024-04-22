import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
    const cookieStore = cookies();
    const hasCookie = cookieStore.has("token");

    if (hasCookie) {
        const token = cookieStore.get("token").value;

        await fetch(`${process.env.BACKEND_URL}/user/session/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.status === 200) {
                redirect("/profile");
            }
        });
    }

    return <>{children}</>;
}
