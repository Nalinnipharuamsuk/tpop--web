"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ เพิ่มตรงนี้
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter(); // ✅ ใช้งาน router

    const handleSubmit = (e) => {
        e.preventDefault();
        // ✅ ไม่ต้อง alert
        router.push("/"); // ✅ ไปหน้า http://localhost:3000/
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-purple-400 to-white flex items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 w-full max-w-sm shadow-lg"
            >
                <h1 className="text-3xl font-bold mb-6 text-purple-700 text-center">
                    เข้าสู่ระบบ T-POP Hub
                </h1>
                <p className="text-center text-gray-600 text-sm mb-6">
                    เข้าสู่ระบบเพื่อเข้าถึงชาร์ตเพลง และศิลปินที่คุณชื่นชอบ
                </p>

                <div className="mb-4 relative">
                    <input
                        type="email"
                        placeholder="อีเมล"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-purple-300 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>

                <div className="mb-6 relative">
                    <input
                        type="password"
                        placeholder="รหัสผ่าน"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full border border-purple-300 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                        <i className="fas fa-lock"></i>
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-500 transition"
                >
                    เข้าสู่ระบบ
                </button>
                <p className="mt-6 text-center text-sm text-gray-400">
                    มีบัญชีอยู่แล้ว?{" "}
                    <a href="/register" className="text-purple-500 font-semibold hover:underline">
                        ลงทะเบียน
                    </a>
                </p>
            </form>
        </div>
    );
}
