"use client";

import Footer from "../../../components/Footer";
import React from "react";

const SubmitSongPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-purple-100 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-400 to-white shadow-md text-white text-center flex items-center justify-center p-14">
      </div>

      {/* Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-[90%] max-w-3xl mx-auto my-6 flex-grow">
        <h1 className="text-purple-700 text-2xl font-bold mb-2">T-POP Hub</h1>
        <h2 className="text-purple-700 text-lg mb-4">
          แจ้งเพลงใหม่เข้าชาร์ต / Tell us here for new songs
        </h2>

        <form action="/submit_song" method="post">
          <label htmlFor="song_name" className="font-bold block mb-1">
            ชื่อเพลง (Song name)
          </label>
          <p className="text-sm text-purple-700 mb-1">
            *โปรดตรวจสอบเพลงในชาร์ตก่อนที่จะส่งเพิ่มเพลง เพื่อป้องกันการซ้ำซ้อนของชื่อเพลง
          </p>
          <p className="text-sm text-purple-700 mb-2">
            *Before filling the form, please recheck if the song has already been added into the weekly chart or not
          </p>
          <input
            type="text"
            id="song_name"
            name="song_name"
            required
            className="w-full p-2 border border-gray-300 rounded mb-5"
          />

          <label htmlFor="artist_name" className="font-bold block mb-1">
            ชื่อศิลปิน (Artist name)
          </label>
          <input
            type="text"
            id="artist_name"
            name="artist_name"
            required
            className="w-full p-2 border border-gray-300 rounded mb-5"
          />

          <label htmlFor="youtube_url" className="font-bold block mb-1">
            YouTube URL
          </label>
          <p className="text-sm text-purple-700 mb-1">**ต้องเป็นลิงก์ที่มาจากช่อง Official**</p>
          <p className="text-sm text-purple-700 mb-2">**The link URL must come from YouTube Official Channel**</p>
          <input
            type="url"
            id="youtube_url"
            name="youtube_url"
            required
            className="w-full p-2 border border-gray-300 rounded mb-5"
          />

          <label htmlFor="spotify_url" className="font-bold block mb-1">
            Spotify URL
          </label>
          <input
            type="url"
            id="spotify_url"
            name="spotify_url"
            className="w-full p-2 border border-gray-300 rounded mb-5"
          />

          <label htmlFor="release_date" className="font-bold block mb-1">
            วันปล่อยเพลง (Release date)
          </label>
          <p className="text-sm text-purple-700 mb-1">
            **จะต้องเป็นเพลงที่ปล่อยไม่เกิน 3 สัปดาห์ก่อนวันที่เริ่มชาร์ตถัดไป**
          </p>
          <p className="text-sm text-purple-700 mb-2">
            **The song must be released not longer than 3 weeks before the new weekly chart has started**
          </p>
          <input
            type="date"
            id="release_date"
            name="release_date"
            required
            className="w-full p-2 border border-gray-300 rounded mb-6"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </div>


        <Footer />

    </div>
  );
};

export default SubmitSongPage;
