import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideNav() {
    const pathname = usePathname();
    return (
        <nav className="bg-white p-4 shadow-md w-1/4 h-full">
            <h2 className="text-lg text-gray-500 font-bold mb-4">My Account</h2>
            <ul className="space-y-2">
                <li>
                    <Link
                        href="/profile"
                        className={`hover:text-blue-500 ${
                            pathname === "/profile" && "text-blue-500"
                        }`}
                    >
                        Profile
                    </Link>
                </li>
                <li>
                    <Link
                        href="/profile/change-password"
                        //    if hover txt-blue, if search params settings text-blue
                        className={`hover:text-blue-500 ${
                            pathname === "/profile/change-password" &&
                            "text-blue-500"
                        }`}
                    >
                        Change Password
                    </Link>
                </li>
                <li>
                    <Link
                        href="/profile/connected-devices"
                        className={`hover:text-blue-500 ${
                            pathname === "/profile/connected-devices" &&
                            "text-blue-500"
                        }`}
                    >
                        Connected Devices
                    </Link>
                </li>
                <li>
                    <Link
                        href="/profile/delete"
                        className={`hover:text-blue-500 ${
                            pathname === "/profile/delete" && "text-blue-500"
                        }`}
                    >
                        Delete Profile
                    </Link>
                </li>
            </ul>

            <h2 className="text-lg text-gray-500 font-bold mt-8 mb-4">
                Courses
            </h2>
            <ul className="space-y-2">
                <li>
                    <Link
                        href="/profile/course"
                        className={`hover:text-blue-500 ${
                            pathname === "/profile/course" && "text-blue-500"
                        }`}
                    >
                        Course List
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
