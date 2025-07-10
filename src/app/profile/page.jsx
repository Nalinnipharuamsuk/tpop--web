'use client';
import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import Head from 'next/head';
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProfilePage = () => {
  const [image, setImage] = useState(
    'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/o0iL4A2yeEMgBuhAizivD2yCQSrPIjSAeKJgEB~tplv-tej9nj120t-origin.webp'
  );
  const [username, setUsername] = useState('Dum Samit');
  const [lastname, setLastname] = useState('ดำ สมิด');
  const [gender, setGender] = useState('male');

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
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-gradient-to-b from-purple-400 to-white p-14 text-center shadow-md">

      </header>

      <main className="p-5 min-h-screen  font-sans">
        <div className="flex justify-center items-center gap-10 mb-8">
          <div className="relative">
            <img
              src={image}
              alt="Profile"
              className="w-36 h-36 object-cover rounded-full border"
            />
            <input
              type="file"
              id="uploadImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <button
              onClick={() => document.getElementById('uploadImage').click()}
              className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-gradient-to-b from-purple-200 to-purple-700 text-white rounded-full hover:scale-110 transition"
              aria-label="เปลี่ยนรูปภาพ"
            >
              <i className="fas fa-pen text-sm" />
            </button>


          </div>
          <div>
            <h2 className="text-3xl text-purple-700 font-semibold">{username}</h2>
            <p className="text-gray-600 flex items-center gap-1">
              <i className="ri-user-add-line" /> 13 กำลังติดตาม
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-b bg-purple-200 max-w-xl mx-auto p-6 rounded-lg">
          <div className="mb-4 flex items-center">
            <label htmlFor="username" className="w-1/3 font-semibold text-gray-700">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-2/3 p-2 rounded-lg border bg-white"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="lastname" className="w-1/3 font-semibold text-gray-700">
              ชื่อ-นามสกุล
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-2/3 p-2 rounded-lg border bg-white"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="gender" className="w-1/3 font-semibold text-gray-700">
              เพศ
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-2/3 p-2 rounded-lg border bg-white"
            >
              <option value="male">ผู้ชาย</option>
              <option value="female">ผู้หญิง</option>
              <option value="unspecified">ไม่ระบุ</option>
            </select>
          </div>
        </form>

        <div className="flex justify-center gap-5 mt-6">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-b bg-purple-500 text-white py-2 px-6 rounded-full"
          >
            บันทึกข้อมูล
          </button>
          <a
            href="/logout"
            className="text-gray-600 border border-gray-400 py-2 px-6 rounded-full bg-white"
          >
            Logout
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProfilePage;
