"use client";
import Footer from "../../../components/Footer";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GroupPage() {
  const [activeTab, setActiveTab] = useState("ประวัติ");

  const members = [
    {
      name: "Fai",
      fullName: "ฝ้าย – ณัฐธยาน์ บุตรธุระ (Fai – Nattaya Buttura)",
      age: 21,
      location: "เชียงใหม่",
      instagram: "callmebanananana",
      image: "https://images.workpointtoday.com/workpointnews/2021/01/26140901/1611644936_97641_1.jpg",
    },
    {
      name: "Punch",
      fullName: "พั้นช์-ทิพานัน นิลสยาม (Punch-Tipanan Nilsiam)",
      age: 20,
      location: "กรุงเทพมหานคร",
      instagram: "ppunnch",
      image: "https://images.workpointtoday.com/workpointnews/2021/01/26140855/1611644930_46800_1.jpg",
    },
    {
      name: "Mind",
      fullName: "มายด์-อาทิตยา ตรีบุดารักษ์ (Mind-Atitaya Tribudarak)",
      age: 25,
      location: "ชลบุรี",
      instagram: "_tiya_",
      image: "https://images.workpointtoday.com/workpointnews/2021/01/26140849/1611644924_31933_2.jpg",
    },
    {
      name: "AhEye",
      fullName: "อ๊ะอาย-กรณิศ เล้าสุบินประเสริฐ (AhEye-Korranid Loasubinprasoe)",
      age: 19,
      location: "กรุงเทพมหานคร",
      instagram: "ah_eye.korranid",
      image: "https://images.workpointtoday.com/workpointnews/2021/01/26140914/1611644948_36108_2.jpg",
    },
    {
      name: "Hannah",
      fullName: "แฮนน่า-แฮนน่า โรสลีน บลูม (Hannah-Hannah Rosenbloom)",
      age: 23,
      location: "สปป.ลาว",
      instagram: "hannah_kmz",
      image: "https://images.workpointtoday.com/workpointnews/2021/01/26141006/1611645001_21759_2.jpg",
    },
    {
      name: "Jorin",
      fullName: "โจริญ-โจริญ คัมภีรพันธุ์ (Jorin-Jorin Khumpiraphan)",
      age: 24,
      location: "เชียงใหม่",
      instagram: "jorinja",
      image: "https://images.workpointtoday.com/workpointnews/2021/01/26140959/1611644995_51196_1.jpg",
    },
    {
      name: "Taoaom",
      fullName: "ตาออม เบญญาภา อุ่นจิตร (Taoaom-Benyapa Unjit)",
      age: 24,
      location: "กรุงเทพมหานคร",
      instagram: "taoaom",
      image: "https://images.workpointtoday.com/workpointnews/2021/01/26140947/1611644982_95888_1.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-purple-200 to-white">
      {/* Navbar */}
      <nav className="bg-gradient-to-b from-purple-400 to-white shadow-md py-16 px-6 flex justify-between items-center">
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* กล่องโปรไฟล์วง */}
        <div
          className="bg-white w-full mb-6 rounded-lg shadow-lg border-t border-gray-300 p-6"
          style={{ filter: "drop-shadow(0 -4px 6px rgba(0,0,0,0.1))" }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-start gap-6 flex-wrap">
              <img
                src="https://mellow975.mcot.net/uploads/article/new_676e3a05ec959.jpg"
                alt="4EVE"
                className="w-32 h-32 rounded-md flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <div className="flex items-center flex-wrap gap-4">
                  <h2 className="text-2xl font-semibold">4EVE</h2>
                  <button className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 hover:bg-purple-100 transition whitespace-nowrap">
                    ☆ เข้าร่วม
                  </button>
                </div>
                <p className="text-gray-600 mt-1">70,929 fans</p>
              </div>
            </div>
          </div>

          {/* ปุ่มเมนู */}
          <div className="flex justify-center space-x-4 mt-6">
            {["ประวัติ", "ติดตามผลงานศิลปิน", "เว็บบอร์ด"].map((btn, i) => {
              const isActive = activeTab === btn;
              const baseClass =
                "px-4 py-1 rounded-full border transition " +
                (isActive
                  ? "bg-purple-500 text-white border-purple-500"
                  : "border-purple-500 text-purple-500 hover:bg-purple-100");

              if (btn === "ติดตามผลงานศิลปิน") {
                return (
                  <Link key={i} href="/trackingchannel_page">
                    <button
                      onClick={() => setActiveTab(btn)}
                      className={baseClass}
                    >
                      {btn}
                    </button>
                  </Link>
                );
              }

              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(btn)}
                  className={baseClass}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Member Cards */}
        <div className="bg-white mx-auto max-w-3xl rounded-xl shadow-lg px-6 py-8">
          {members.map((m, i) => (
            <div key={i} className="flex items-center mb-6">
              <img
                src={m.image}
                alt={m.name}
                className="w-16 h-28 object-cover rounded-lg mr-4"
              />
              <div>
                <p className="font-semibold">{m.fullName}</p>
                <p className="text-sm text-gray-600">
                  อายุ {m.age} ปี จาก {m.location}
                </p>
                <p className="text-sm">
                  IG:{" "}
                  <a
                    href={`https://instagram.com/${m.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 font-semibold hover:underline"
                  >
                    @{m.instagram}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
