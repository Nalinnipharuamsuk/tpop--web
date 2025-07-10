export default function FanPostDetails() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-purple-200 to-white">
      {/* Navbar */}
      <nav className="bg-gradient-to-b from-purple-400 to-white shadow-md py-10 px-6 flex justify-between items-center">
        {/* ว่างไว้ */}
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
              className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 hover:bg-purple-100 whitespace-nowrap"
            >
              ประวัติ
            </a>
            <a
              href="/trackingchannel_page"
              className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 hover:bg-purple-100 whitespace-nowrap"
            >
              ติดตามผลงานศิลปิน
            </a>
            <button
              className="border border-purple-500 text-purple-500 rounded-full px-4 py-1 hover:bg-purple-100 whitespace-nowrap"
            >
              เว็บบอร์ด
            </button>
          </div>
        </div>

        {/* Post Details */}
        <div className="bg-white mx-auto mb-12 max-w-2xl rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <a
              href="/webboard1_page"
              className="text-purple-500 hover:text-purple-700 font-bold"
              title="ย้อนกลับ"
            >
              ←
            </a>
            Post Details
          </h2>
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/th/d/da/4EVE_TheFirstAlbum.jpg"
              alt="4EVE Album"
              className="w-60 object-contain rounded"
            />
          </div>
          <p className="mt-4 text-gray-700">รายละเอียดของโพสต์นี้......</p>

          {/* Comments */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold">หนูบัด จิตแจ่มใส</p>
                <p>วิชาเธอชั่งมากกกกก</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold">หนูบัด จิตแจ่มใส</p>
                <p>หนูรักพี่ค่ะ</p>
              </div>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="เขียนความคิดเห็นของคุณ..."
              className="w-full border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="mt-3 px-6 py-2 bg-purple-400 text-white rounded-full hover:bg-purple-500">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
