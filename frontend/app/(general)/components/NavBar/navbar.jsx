import Link from "next/link";
import { getToken } from "../../actions";
import NavBarDropDown from "./navbarComp";

export default async function Navbar() {
    const token = await getToken();

    const response = await fetch(`${process.env.BACKEND_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const user = await response.json();

    // return <NavbarComponent userData={{ user }} />;

    return (
        <nav className="flex items-center justify-between p-4 bg-slate-800 text-white">
            <div className="flex items-center gap-8">
                <div className="flex items-center">
                    {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
                    <Link
                        className="ml-4 font-bold text-2xl hover:text-gray-300"
                        href="/"
                    >
                        SI-MASKULI
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/course"
                        className="hover:text-gray-300 font-bold"
                    >
                        Course
                    </Link>
                    <Link
                        href="/forum"
                        className="hover:text-gray-300 font-bold"
                    >
                        Forum
                    </Link>
                </div>
            </div>

            <NavBarDropDown image={user.profile_url} />
        </nav>
    );
}
