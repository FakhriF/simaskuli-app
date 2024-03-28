import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const cookieStore = cookies();
    const hasCookie = cookieStore.has("token");

    if (hasCookie) {
        redirect("/profile");
    }

    return <>{children}</>;
}
