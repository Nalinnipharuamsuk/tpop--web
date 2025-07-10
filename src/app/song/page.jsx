"use client";
import React from "react";

const BillboardPage = () => {
  const songs = [
    {
      title: "Proud",
      artist: "fellow fellow",
      views: "58K views",
      img: "https://i.scdn.co/image/ab67616d0000b273c74b9ea7acadfc83eb14062b",
    },
    {
      title: "ถ้าเธอไม่ยิ้มมา",
      artist: "guncharie",
      views: "732K views",
      img: "https://i.scdn.co/image/ab67616d00001e02f0ed77a87d25616b87b218a2",
    },
    {
      title: "SORRY",
      artist: "Milli, Flower.far, Galchanie",
      views: "6.2M views",
      img: "https://images.genius.com/df619df0900a27ca4029fe0e3d55eab0.834x834x1.png",
    },
    {
      title: "DAY ONE",
      artist: "PUN",
      views: "29M views",
      img: "https://www.dailynews.co.th/wp-content/uploads/2024/06/DAY-ONE-Cover-Art_0.jpg",
    },
    {
      title: "ฉันไม่ต้องการเธอในตอนนี้",
      artist: "Little John",
      views: "18M views",
      img: "https://source.boomplaymusic.com/group10/M00/07/19/e46d72d3a7d14682bc9068f867854da5_320_320.jpg",
    },
    {
      title: "เหมือนวิวาห์",
      artist: "Jeff Satur",
      views: "28M views",
      img: "https://images.genius.com/6cf139db1288cd84c0b31095845348aa.1000x1000x1.png",
    },
    {
      title: "ดอกไม้ที่รอฝน",
      artist: "The TOYS,NONT TANONT",
      views: "32M views",
      img: "https://i.scdn.co/image/ab67616d0000b27340595baf412657af206343ba",
    },
    {
      title: "นี่ฉันเองคนที่...",
      artist: "PURPEECH",
      views: "295K views",
      img: "https://www.dochord.com/wp-content/uploads/2024/09/PURPEECH-1-150x150.webp",
    },
    {
      title: "ที่เดิม",
      artist: "PUN",
      views: "118K views",
      img: "https://www.dochord.com/wp-content/uploads/2024/09/PUN-150x150.webp",
    },
    {
      title: "LIAR",
      artist: "BUS",
      views: "2.8M views",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbtfBSRHhohJJ2qCQV8Ikb041MAZ4mhRejw&s",
    },
    {
      title: "สวยงามเสมอ",
      artist: "Billkin",
      views: "7.8M views",
      img: "https://mpics.mgronline.com/pics/Images/567000002734201.JPEG",
    },
    {
      title: "วันที่นาฬิกาของเราหมุนไปพร้อมกัน",
      artist: "No One Else",
      views: "7.9M views",
      img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/33/78/f7337849-0a23-91d1-9445-4bc58265996d/198704100314_Cover.jpg/1200x1200bb.jpg",
    },
    {
      title: "ส่วนต่าง",
      artist: "BOWKYLION",
      views: "16M views",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalushH9uzkle650Ljkyn_BuFUqvWNLyZtWeKLLm3xCUicIeOFyBAH5ycqqpszLRMKrkc&usqp=CAU",
    },
    {
      title: "สาริกาลิ้นทอง",
      artist: "Paper Planes x โจอี้ ภูวศิษฐ์",
      views: "9.5M views",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TH2a2hgqn0PHh4L4KH3eLpwr5VZ6R4NxYQ&s",
    },
    {
      title: "ที่ฉันเสียใจ",
      artist: "มนัสวีร์",
      views: "15M views",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFA93FRQifS2pexxhh4llwTP-NjMw8PuljTEezOsGV7X7jrvoasKJt9SdrHgxpVLoprxw&usqp=CAU",
    },
    {
      title: "ลืมไม่จริง",
      artist: "Yes'Sir Days",
      views: "2M views",
      img: "https://melody-assets.line-scdn.net/musics/public/3ed71941-4df7-402d-a26a-94ea647f3808.jpeg",
    },
  ];

  return (
    <div style={{ fontFamily: "'Prompt', sans-serif", background: "#fff" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
        rel="stylesheet"
      />
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(to bottom, #b39ddb, #7e57c2)",
          textAlign: "center",
          padding: "50px 0",
          color: "white",
        }}
      >
        
      </div>

      {/* Title */}
      <div style={{ marginLeft: "50px", padding: "30px 0" }}>
        <h1
          style={{
      fontFamily: "'Bungee', sans-serif",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#5e35b1",
      letterSpacing: "3px",
      textShadow: "2px 2px 0px rgba(255,255,255,0.8)",
      textAlign: "left",
      marginLeft: "180px", padding: "30px 0"
    }}
        >
          The
          <br />
          Billboard
          <br />
          Month...
        </h1>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "15px",
          justifyContent: "center",
          width: "70%",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        {songs.map((song, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "10px",
              width: "210px",
              height: "290px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={song.img}
              alt={`${song.title} by ${song.artist}`}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px 0" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "5px",
                }}
              >
                {song.title}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginBottom: "5px",
                }}
              >
                {song.artist}
              </p>
              <p style={{ fontSize: "12px", color: "#777" }}>{song.views}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          background: "linear-gradient(to bottom, #b39ddb, #7e57c2)",
          padding: "50px 0",
          textAlign: "center",
          color: "white",
        }}
      >
        
      </div>
    </div>
  );
};

export default BillboardPage;
