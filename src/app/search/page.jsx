"use client";

import { useState } from "react";
import Footer from "../../../components/Footer";
import { useRouter } from "next/navigation";

const bands = [
  {
    id_bands: 1,
    band_name: "4EVE ",
    band_picture: "https://mellow975.mcot.net/uploads/article/new_676e3a05ec959.jpg",
    type: "group",
  },
  {
    id_bands: 2,
    band_name: "MILLI",
    band_picture: "https://lyricstranslate.com/files/pr01_0065-819x1024_0.jpg",
    type: "solo",
  },
  {
    id_bands: 3,
    band_name: "PERSES",
    band_picture: "https://sudsapda.com/app/uploads/2024/11/Cover-Fashion-Online_Perses-1.jpg",
    type: "group",
  },
  {
    id_bands: 4,
    band_name: "BILLKIN",
    band_picture: "https://mellow975.mcot.net/uploads/article/article_62cfa9c1d0559.jpg",
    type: "solo",
  },
  {
    id_bands: 5,
    band_name: "THREE MAN DOWN",
    band_picture: "https://media.readthecloud.co/wp-content/uploads/2023/06/29044921/three-man-down-thumbnail.jpg",
    type: "group",
  },
  {
    id_bands: 6,
    band_name: "BUS ",
    band_picture: "https://mintmagth.s3.ap-southeast-1.amazonaws.com/photos/shares/Mint%20People/2023/DEC%202023/PRE%20DEBUT%20BUS/656d77529481b.jpeg",
    type: "group",
  },
];

export default function BandSearchPage() {
    const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredBands = bands.filter((band) => {
    const matchesSearch = band.band_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || band.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-white font-[Kanit]">
      <div className="bg-gradient-to-b from-purple-400 to-white p-4 text-center shadow-md ">
        <form
          className="flex justify-center items-center gap-4 flex-wrap"
          onSubmit={(e) => e.preventDefault()}
        >
          <img
            src="logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <input
            type="text"
            name="q"
            placeholder="ค้นหาศิลปินที่คุณชื่นชอบ"
            className="p-3 rounded-full text-sm w-[60%] bg-white mr-6 focus:outline-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="-ml-10 text-gray-500 cursor-pointer"
            aria-label="ค้นหา"
          >
            <i className="fa fa-search text-xl"></i>
          </button>
          <a href="/profile" tabIndex={0} className="ml-6">
            <img
              src="https://i.pinimg.com/550x/13/d9/7d/13d97d540be78ef119a9e357b76816a1.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </a>
        </form>

        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          {[ 
            { label: "ทั้งหมด", type: "all" },
            { label: "ศิลปินกลุ่ม", type: "group" },
            { label: "ศิลปินเดี่ยว", type: "solo" },
            { label: "ศิลปินดูโอ้", type: "duo" },
          ].map(({ label, type }) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                filterType === type
                  ? "bg-purple-600 text-white border-purple-600"
                  : "text-black border-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
              tabIndex={0}
              aria-pressed={filterType === type}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 px-4">
        <div className="bg-white rounded-lg shadow p-4">
          {filteredBands.length > 0 ? (
            filteredBands.map((band) => (
              <div
                key={band.id_bands}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={band.band_picture}
                    alt={band.band_name}
                    width={80}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{band.band_name}</h4>
                    <p className="text-gray-500 text-sm">70,023 fans</p>
                  </div>
                </div>
                <button
                  className="border border-purple-600 text-purple-600 px-4 py-2 rounded-full text-sm hover:bg-purple-600 hover:text-white transition"
                  onClick={() => router.push("/artist_page")}
                  tabIndex={0}
                >
                  เข้าชม
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500 font-semibold">
              ไม่พบวงดนตรีที่ตรงกับคำค้นหา "{searchTerm}"
            </p>
          )}
        </div>
      </div>
      <Footer />  
    </div>
    
  );
}
