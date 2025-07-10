"use client";
import React, { useState } from "react";

const ProfilePage = () => {
  const [image, setImage] = useState(
    "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/o0iL4A2yeEMgBuhAizivD2yCQSrPIjSAeKJgEB~tplv-tej9nj120t-origin.webp"
  );
  const [username, setUsername] = useState("Dum Samit");
  const [lastname, setLastname] = useState("ดำ สมิด");
  const [gender, setGender] = useState("male");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`บันทึกข้อมูลสำเร็จ:\nชื่อผู้ใช้: ${username}\nชื่อ-นามสกุล: ${lastname}\nเพศ: ${gender}`);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
        rel="stylesheet"
      />

      <header style={styles.header}>
        <h1 style={{ color: "white" }}>หน้าโปรไฟล์</h1>
      </header>

      <main style={styles.container}>
        <div style={styles.profile}>
          <div style={styles.imageWrapper}>
            <img src={image} alt="Profile" style={styles.image} />
            <input
              type="file"
              id="uploadImage"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <button
              className="ri-pencil-line"
              onClick={() => document.getElementById("uploadImage").click()}
              style={styles.editIcon}
              aria-label="แก้ไขรูปภาพ"
            ></button>
          </div>

          <div style={styles.profileText}>
            <h2 style={{ fontSize: "40px", color: "#7e22ce" }}>{username}</h2>
            <i className="ri-user-add-line"> 13 กำลังติดตาม</i>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.editForm}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="lastname" style={styles.label}>
              ชื่อ-นามสกุล
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="gender" style={styles.label}>
              เพศ
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={styles.input}
            >
              <option value="male">ผู้ชาย</option>
              <option value="female">ผู้หญิง</option>
              <option value="unspecified">ไม่ระบุ</option>
            </select>
          </div>
        </form>

        {/* ปุ่มอยู่ด้านล่างนอกฟอร์ม */}
        <div style={styles.buttonContainer}>
          <button onClick={handleSubmit} style={styles.submitBtn}>
            บันทึกข้อมูล
          </button>
          <a href="/logout" style={styles.logoutBtn}>
            Logout
          </a>
        </div>
      </main>

      <footer style={styles.footer}></footer>
    </>
  );
};

const styles = {
  header: {
    background: "linear-gradient(to bottom, #e9d5ff, #7e22ce)",
    padding: "40px",
    textAlign: "center",
  },
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f5ff",
    minHeight: "100vh",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  editIcon: {
    position: "absolute",
    top: "5px",
    right: "5px",
    background: "linear-gradient(to bottom, #e9d5ff, #7e22ce)",
    border: "none",
    borderRadius: "50%",
    padding: "6px",
    fontSize: "18px",
    color: "white",
    cursor: "pointer",
  },
  profileText: {
    textAlign: "left",
    color: "#333",
  },
  editForm: {
    background: "linear-gradient(to bottom, #e9d5ff, #c084fc)",
    padding: "25px",
    borderRadius: "15px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  label: {
    flex: "1",
    marginLeft: "25px",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "70%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#ffffff",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "25px",
  },
  submitBtn: {
    background: "linear-gradient(to bottom, #c084fc, #7e22ce)",
    color: "white",
    border: "1px solid #7e22ce",
    borderRadius: "20px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  logoutBtn: {
    color: "#6D6D6D",
    backgroundColor: "#fff",
    border: "1px solid #6D6D6D",
    padding: "10px 20px",
    borderRadius: "20px",
    textDecoration: "none",
  },
  footer: {
    background: "linear-gradient(to bottom, #e9d5ff, #7e22ce)",
    padding: "60px",
    textAlign: "center",
  },
};

export default ProfilePage;
