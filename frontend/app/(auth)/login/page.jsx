import Link from "next/link";
import LoginForm from "./form";

export const metadata = {
    title: "Login",
};

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Si-Mas Kuli</h1>
            <LoginForm />
            <p className="text-gray-500 mt-4">
                Belum punya akun?{" "}
                <Link
                    href="/register"
                    className="text-blue-500 hover:text-blue-700"
                >
                    Daftar
                </Link>
            </p>
        </div>
    );
}
