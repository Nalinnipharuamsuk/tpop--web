"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ เพิ่ม
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function LoginPage() {
  const router = useRouter(); // ✅ ใช้งาน router

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setError("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    setError("");
    router.push("/"); 
  };

  const inputStyle =
    "w-full border border-purple-300 rounded-xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-transparent";

  const iconStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-purple-400";

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-400 to-white flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">เข้าสู่ระบบ T-POP</h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          เพลิดเพลินกับศิลปินที่คุณชื่นชอบ
        </p>

        {error && (
          <div className="bg-red-500 text-white text-center rounded-lg py-2 text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="ชื่อ"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputStyle}
                required
              />
              <span className={iconStyle}>
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="นามสกุล"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputStyle}
                required
              />
              <span className={iconStyle}>
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="อีเมล"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              required
            />
            <span className={iconStyle}>
              <i className="fas fa-envelope"></i>
            </span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              required
            />
            <span className={iconStyle}>
              <i className="fas fa-lock"></i>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl py-3 font-semibold hover:from-purple-700 hover:to-purple-500 transition"
          >
            สมัครสมาชิก
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          ยังไม่มีบัญชี?{" "}
          <a href="/login" className="text-purple-500 font-semibold hover:underline">
            เข้าสู่ระบบ
          </a>
        </p>
      </div>
    </div>
  );
}
