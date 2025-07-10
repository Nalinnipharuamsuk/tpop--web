"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../../components/Footer";

export default function Home() {
  const banners = [
    "https://s359.kapook.com/pagebuilder/eb7097ed-7973-44a8-88e9-0b26fb08802c.jpg",
    "https://cms.kapook.com/uploads/tag/44/ID_43312_642fd7698ab75.jpg",
    "https://storage-wp.thaipost.net/2025/03/3-25.jpg",
  ];

  const songs = [
    {
      title: "proud",
      artist: "fellow fellow",
      views: "58K",
      img: "https://i.scdn.co/image/ab67616d0000b273c74b9ea7acadfc83eb14062b",
    },
    {
      title: "ไม่เป็นรอง",
      artist: "COCKTAIL",
      views: "732K",
      img: "https://www.dochord.com/wp-content/uploads/2022/08/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A3%E0%B8%AD%E0%B8%87-COCKTAIL.webp",
    },
    {
      title: "SORRY",
      artist: "Milli, Flower.far, Galchanie",
      views: "6.2M",
      img: "https://images.genius.com/df619df0900a27ca4029fe0e3d55eab0.834x834x1.png",
    },
    {
      title: "DAY ONE",
      artist: "PUN",
      views: "29M",
      img: "https://www.dailynews.co.th/wp-content/uploads/2024/06/DAY-ONE-Cover-Art_0.jpg",
    },
    {
      title: "เม้นหยอกๆ",
      artist: "PERSES",
      views: "2M",
      img: "https://cms.dmpcdn.com/musicarticle/2025/05/29/274d5e10-3c99-11f0-b877-437fa63d2c00_webp_original.webp",
    },

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <>
      <Head>
        <title>T-POP Billboard</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-gradient-to-b from-purple-400 to-white py-4 shadow-md sticky top-0 z-50">
        <form className="max-w-5xl mx-auto flex items-center gap-4 px-4">
          <img
            src="/logo.png"
            alt="T-POP Billboard"
            className="w-20 h-20 object-contain"
          />
          <input
            type="text"
            name="q"
            placeholder="ค้นหาศิลปินที่คุณชื่นชอบ"
            required
            className="flex-grow focus:outline-transparent rounded-full px-5 py-3 text-sm bg-white"
          />
          <a href="/search" aria-label="Search" className="text-white">
            <i className="fa fa-search text-2xl cursor-pointer" />
          </a>
          <a href="/profile" className="ml-6">
            <img
              src="https://i.pinimg.com/550x/13/d9/7d/13d97d540be78ef119a9e357b76816a1.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
        </form>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-8">
        {/* Banner */}
        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg bg-black">
          {banners.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Banner ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${current === i ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              loading="lazy"
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${current === i ? "bg-pink-600" : "bg-pink-300"
                  }`}
                aria-label={`Go to banner ${i + 1}`}
              />
            ))}
          </div>
        </div>


        {/* Billboard Section */}
        <section className="bg-gradient-to-b from-purple-400 to-white rounded-xl mt-10 p-6 text-white shadow-md">
          <div className="flex justify-between items-center mb-6">
            <img
              src="bill.png"
              alt="The"
              className="w-40 mb-1"
            />
            <a
              href="/song"
              className="text-white hover:text-purple-500 transition text-3xl"
              aria-label="Go to songs"
            >
              <i className="fa-regular fa-circle-right"></i>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {songs.map((song, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition cursor-pointer"
              >
                <img
                  src={song.img}
                  alt={song.title}
                  className="rounded-t-xl w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-3 text-black">
                  <h3 className="font-semibold text-lg truncate">{song.title}</h3>
                  <p className="text-sm text-gray-700 truncate">{song.artist}</p>
                  <p className="text-xs text-gray-500 mt-1">{song.views} views</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Add Song */}
        <section className="bg-gradient-to-b from-purple-400 to-white rounded-xl mt-12 p-6 text-white shadow-md max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 drop-shadow-lg "
            style={{
              WebkitTextStroke: "0.5px purple",
              color: "white",
            }}>
            แจ้งเพลงใหม่เข้าชาร์ตได้ที่นี่
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-lg sm:text-left text-center text-purple-950">
              เพลงของศิลปินที่คุณชื่นชอบมาแล้วใช่มั้ย?
              <br />
              แจ้งเพลงใหม่เข้าชาร์ตตอนนี้เลย
            </p>
            <a href="/submit_song" className="inline-block">
              <button className="text-purple-950 transition rounded-full px-8 py-3 font-semibold shadow-lg">
                เพิ่มเพลง
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />      
      
    </>
  );
}
