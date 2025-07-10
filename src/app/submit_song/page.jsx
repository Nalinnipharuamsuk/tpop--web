"use client";
import React from "react";

const SubmitSongPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f3e8ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(to bottom, #c084fc, #7e22ce)",
        padding: "0",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px"
      }}>
        <img
          src="/pic/iGOMaVIoPv0OnxuUdZA_2-transformed.png"
          alt="T-POP Hub"
          style={{ width: "100px", height: "auto", marginRight: "10px" }}
        />
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>T-POP Hub</span>
      </div>

      {/* Form */}
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "500px",
        margin: "20px auto",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        flexGrow: 1
      }}>
        <h1 style={{ color: "#9333ea" }}>T-POP Hub</h1>
        <h2 style={{ color: "#9333ea", fontSize: "18px" }}>แจ้งเพลงใหม่เข้าชาร์ต / Tell us here for new songs</h2>

        <form action="/submit_song" method="post">
          <label htmlFor="song_name" style={labelStyle}>ชื่อเพลง (Song name)</label>
          <p style={noteStyle}>*โปรดตรวจสอบเพลงในชาร์ตก่อนที่จะส่งเพิ่มเพลง เพื่อป้องกันการซ้ำซ้อนของชื่อเพลง</p>
          <p style={noteStyle}>*Before filling the form, please recheck if the song has already been added into the weekly chart or not</p>
          <input type="text" id="song_name" name="song_name" required style={inputStyle} />

          <label htmlFor="artist_name" style={labelStyle}>ชื่อศิลปิน (Artist name)</label>
          <input type="text" id="artist_name" name="artist_name" required style={inputStyle} />

          <label htmlFor="youtube_url" style={labelStyle}>YouTube URL</label>
          <p style={noteStyle}>**ต้องเป็นลิงก์ที่มาจากช่อง Official**</p>
          <p style={noteStyle}>**The link URL must come from YouTube Official Channel**</p>
          <input type="url" id="youtube_url" name="youtube_url" required style={inputStyle} />

          <label htmlFor="spotify_url" style={labelStyle}>Spotify URL</label>
          <input type="url" id="spotify_url" name="spotify_url" style={inputStyle} />

          <label htmlFor="release_date" style={labelStyle}>วันปล่อยเพลง (Release date)</label>
          <p style={noteStyle}>**จะต้องเป็นเพลงที่ปล่อยไม่เกิน 3 สัปดาห์ก่อนวันที่เริ่มชาร์ตถัดไป**</p>
          <p style={noteStyle}>**The song must be released not longer than 3 weeks before the new weekly chart has started**</p>
          <input type="date" id="release_date" name="release_date" required style={inputStyle} />

          <button type="submit" style={submitButtonStyle}>Submit</button>
        </form>
      </div>

      {/* Footer */}
      <div style={{
        background: "linear-gradient(to bottom, #c084fc, #7e22ce)",
        padding: "50px 0",
        textAlign: "center",
        color: "white"
      }}>
       
      </div>
    </div>
  );
};

// 🎨 Inline Styles (โทนสีม่วง)
const labelStyle = {
  fontWeight: "bold",
  display: "block",
  margin: "15px 0 5px",
};

const noteStyle = {
  fontSize: "12px",
  color: "#9333ea",
  marginBottom: "5px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "5px 0 20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const submitButtonStyle = {
  backgroundColor: "#9333ea",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

export default SubmitSongPage;