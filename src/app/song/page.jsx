"use client";
import React from "react";
import Head from "next/head";
import Footer from "../../../components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BillboardPage = () => {
  const songs = [
    { title: "Proud", artist: "fellow fellow", views: "58K views", img: "https://i.scdn.co/image/ab67616d0000b273c74b9ea7acadfc83eb14062b" },
    { title: "ถ้าเธอไม่ยิ้มมา", artist: "guncharie", views: "732K views", img: "https://i.scdn.co/image/ab67616d00001e02f0ed77a87d25616b87b218a2" },
    { title: "SORRY", artist: "Milli, Flower.far, Galchanie", views: "6.2M views", img: "https://images.genius.com/df619df0900a27ca4029fe0e3d55eab0.834x834x1.png" },
    { title: "DAY ONE", artist: "PUN", views: "29M views", img: "https://www.dailynews.co.th/wp-content/uploads/2024/06/DAY-ONE-Cover-Art_0.jpg" },
    { title: "ฉันไม่ต้องการเธอในตอนนี้", artist: "Little John", views: "18M views", img: "https://source.boomplaymusic.com/group10/M00/07/19/e46d72d3a7d14682bc9068f867854da5_320_320.jpg" },
    { title: "เหมือนวิวาห์", artist: "Jeff Satur", views: "28M views", img: "https://images.genius.com/6cf139db1288cd84c0b31095845348aa.1000x1000x1.png" },
    { title: "ดอกไม้ที่รอฝน", artist: "The TOYS,NONT TANONT", views: "32M views", img: "https://i.scdn.co/image/ab67616d0000b27340595baf412657af206343ba" },
    { title: "นี่ฉันเองคนที่...", artist: "PURPEECH", views: "295K views", img: "https://www.dochord.com/wp-content/uploads/2024/09/PURPEECH-1-150x150.webp" },
    { title: "ที่เดิม", artist: "PUN", views: "118K views", img: "https://www.dochord.com/wp-content/uploads/2024/09/PUN-150x150.webp" },
    { title: "LIAR", artist: "BUS", views: "2.8M views", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbtfBSRHhohJJ2qCQV8Ikb041MAZ4mhRejw&s" },
    { title: "สวยงามเสมอ", artist: "Billkin", views: "7.8M views", img: "https://mpics.mgronline.com/pics/Images/567000002734201.JPEG" },
    { title: "วันที่นาฬิกาของเราหมุนไปพร้อมกัน", artist: "No One Else", views: "7.9M views", img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/33/78/f7337849-0a23-91d1-9445-4bc58265996d/198704100314_Cover.jpg/1200x1200bb.jpg" },
    { title: "ส่วนต่าง", artist: "BOWKYLION", views: "16M views", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalushH9uzkle650Ljkyn_BuFUqvWNLyZtWeKLLm3xCUicIeOFyBAH5ycqqpszLRMKrkc&usqp=CAU" },
    { title: "สาริกาลิ้นทอง", artist: "Paper Planes x โจอี้ ภูวศิษฐ์", views: "9.5M views", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TH2a2hgqn0PHh4L4KH3eLpwr5VZ6R4NxYQ&s" },
    { title: "ที่ฉันเสียใจ", artist: "มนัสวีร์", views: "15M views", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFA93FRQifS2pexxhh4llwTP-NjMw8PuljTEezOsGV7X7jrvoasKJt9SdrHgxpVLoprxw&usqp=CAU" },
    { title: "ลืมไม่จริง", artist: "Yes'Sir Days", views: "2M views", img: "https://melody-assets.line-scdn.net/musics/public/3ed71941-4df7-402d-a26a-94ea647f3808.jpeg" },
  ];

  return (
    <div className="font-prompt bg-white">
      <Head>
        <title>Billboard Month</title>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      {/* Header */}
      <div className="bg-gradient-to-b from-purple-400 to-white text-white text-center py-14 shadow-md"></div>

      {/* Title */}
      <div className="ml-10 py-8">
        <h1 className="font-bungee text-xl font-bold text-purple-800 tracking-[3px] text-left ml-40 py-8 drop-shadow-md">
          The<br />Billboard<br />Month...
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 justify-center w-[70%] mx-auto pb-10">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-3 w-[210px] h-[290px] text-center shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={song.img} alt={`${song.title} by ${song.artist}`} className="w-full h-[180px] object-cover rounded" />
            <div className="pt-3">
              <p className="font-bold text-base mb-1">{song.title}</p>
              <p className="text-sm text-gray-600 mb-1">{song.artist}</p>
              <p className="text-xs text-gray-500">{song.views}</p>
            </div>
          </div>
        ))}
      </div>   
        <Footer />

    </div>
  );
};

export default BillboardPage;