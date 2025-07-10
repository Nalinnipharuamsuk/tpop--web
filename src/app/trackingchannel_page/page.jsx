"use client";
import Footer from "../../../components/Footer";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SocialMediaPage = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-purple-200 to-white">
      {/* Navbar */}
      <nav className="bg-gradient-to-b from-purple-400 to-white shadow-md py-16 px-6 flex justify-between items-center">
        {/* โลโก้หรือชื่อเว็บตรงนี้ */}
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
            <Link href="/artist_page">
              <button
                className={`rounded-full px-4 py-1 border transition ${
                  pathname === "/artist_page"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "border-purple-500 text-purple-500 hover:bg-purple-100"
                }`}
              >
                ประวัติ
              </button>
            </Link>

            <Link href="/trackingchannel_page">
              <button
                className={`rounded-full px-4 py-1 border transition ${
                  pathname === "/trackingchannel_page"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "border-purple-500 text-purple-500 hover:bg-purple-100"
                }`}
              >
                ติดตามผลงานศิลปิน
              </button>
            </Link>

            <Link href="/webboard1_page">
              <button
                className={`rounded-full px-4 py-1 border transition ${
                  pathname === "/webboard1_page"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "border-purple-500 text-purple-500 hover:bg-purple-100"
                }`}
              >
                เว็บบอร์ด
              </button>
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="max-w-3xl mx-auto px-4">
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                src="https://img.icons8.com/ios-filled/50/instagram-new.png"
                alt="Instagram"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Instagram</span>
              <a
                href="https://www.instagram.com/4eve_official/"
                className="ml-2 text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.instagram.com/4eve_official/
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Facebook</span>
              <a
                href="https://www.facebook.com/4EVEofficial"
                className="ml-2 text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/4EVEofficial
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="https://img.icons8.com/ios-filled/50/twitterx.png"
                alt="X"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">X</span>
              <a
                href="https://x.com/4eveofficial"
                className="ml-2 text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://x.com/4eveofficial
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="https://img.icons8.com/ios-filled/50/youtube-play.png"
                alt="Youtube"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Youtube</span>
              <a
                href="https://www.youtube.com/channel/UC9mrIKAyV8AushabYK8i2ew"
                className="ml-2 text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/channel/UC9mrIKAyV8AushabYK8i2ew
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="https://img.icons8.com/ios-filled/50/spotify.png"
                alt="Spotify"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Spotify</span>
              <a
                href="https://open.spotify.com/artist/3aBwCcP4CB8M6S7YV8QkOg"
                className="ml-2 text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://open.spotify.com/artist/3aBwCcP4CB8M6S7YV8QkOg
              </a>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SocialMediaPage;
