"use client";

import { ProfileConnectedDevicesPage } from "./connectedDevices";
import ProfileDeletionPage from "./profileDeletion";
import ChangePasswordPage from "./changePassword";
import ProfileSection from "./profileSection";
import SideNav from "./sideNav";
import { usePathname } from "next/navigation";

export default function ProfileElement({ user }) {
    const pathname = usePathname();

    return (
        <div className="flex gap-4 mt-8 max-w-5xl w-full mx-auto">
            <SideNav />
            {pathname === "/profile" && <ProfileSection user={user} />}
            {pathname === "/profile/change-password" && <ChangePasswordPage />}
            {pathname === "/profile/delete" && (
                <ProfileDeletionPage email={user.email} />
            )}
            {pathname === "/profile/connected-devices" && (
                <ProfileConnectedDevicesPage />
            )}
            {pathname === "/profile/course" && <ProfileCoursePage />}
        </div>
    );
}

function ProfileCoursePage() {
    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Course</h1>
            <p className="text-gray-500">
                This context is the course page of a user. Here, the user can
                access their courses and payment history. You can also access
                the course detail page.
            </p>
        </div>
    );
}
