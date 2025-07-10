import React from 'react';
import Footer from "../../../components/Footer";
const FanPage = () => {
  const feedData = new Array(6).fill({
    img: 'https://mellow975.mcot.net/uploads/article/new_676e3a05ec959.jpg', // ใช้ภาพเดียวกันเพื่อให้ครบ
    favorite: 5,
    comment: 2,
  });

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
          {/* ขยับเฉพาะส่วนรูปและข้อความให้อยู่ใน container จำกัดความกว้าง */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-start gap-6 flex-wrap">
              {/* รูป */}
              <img
                src="https://mellow975.mcot.net/uploads/article/new_676e3a05ec959.jpg"
                alt="4EVE"
                className="w-32 h-32 rounded-md flex-shrink-0"
              />

              {/* ข้อความและปุ่ม */}
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
            <a
              href="/artist_page"
              className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 hover:bg-purple-100"
            >
              ประวัติ
            </a>
            <a
              href="/trackingchannel_page"
              className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 hover:bg-purple-100"
            >
              ติดตามผลงานศิลปิน
            </a>
            <a
              href="/webboard_page"
              className="border border-purple-500 bg-purple-500 text-white rounded-full px-4 py-1 hover:bg-purple-600"
            >
              เว็บบอร์ด
            </a>
          </div>
        </div>

        {/* FAN FEED */}
        <div className="max-w-3xl mx-auto px-6 pb-12">
          <h2 className="text-lg font-semibold mb-4">FAN FEED</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {feedData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              >
                <a href="/webboard2_page">
                  <img
                    src={item.img}
                    alt={`feed-${index}`}
                    className="rounded-t-xl object-cover"
                  />
                </a>
                <div className="p-4 flex justify-between text-red-500 text-sm">
                  <span>favorite {item.favorite}</span>
                  <span>comment {item.comment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FanPage;
