"use client";

import React, { useEffect } from "react";

export default function ArtistForm() {
  useEffect(() => {
    const fileInputs = document.querySelectorAll(".file-input");

    const handleFileInputChange = (event) => {
      const input = event.target;
      const container = input.closest(".image-upload");
      const previewImage = container.querySelector(".preview-image");
      const icon = container.querySelector(".upload-icon");

      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImage.src = e.target.result;
          previewImage.style.display = "block";
          if (icon) icon.style.display = "none";
        };
        reader.readAsDataURL(file);
      } else {
        previewImage.style.display = "none";
        if (icon) icon.style.display = "block";
      }
    };

    fileInputs.forEach((input) => {
      input.addEventListener("change", handleFileInputChange);
    });

    return () => {
      fileInputs.forEach((input) => {
        input.removeEventListener("change", handleFileInputChange);
      });
    };
  }, []);

  const triggerFileInput = (container) => {
    const input = container.querySelector(".file-input");
    input.click();
  };

  const styles = {
    sectionTitle: {
      color: "#7c3aed",
      fontSize: "1.2rem",
      marginBottom: "10px",
      marginTop: "20px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "0.9rem",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
    },
    uploadBox: {
      position: "relative",
      width: "300px",
      height: "200px",
      border: "2px dashed #ccc",
      borderRadius: "8px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: "#f9f9f9",
    },
    previewImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "none",
      position: "absolute",
      top: 0,
      left: 0,
    },
    icon: {
      fontSize: "32px",
      color: "#aaa",
    },
  };

  return (
    <>
      {/* โหลดไอคอนจาก Remix Icon */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
        rel="stylesheet"
      />

      <div>
        <header
          style={{
            background: "linear-gradient(to bottom, #c084fc, #7c3aed)",
            padding: "30px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2>ลงข้อมูลศิลปิน</h2>
        </header>

        <main
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <form>
            <section>
              <h3 style={styles.sectionTitle}>ข้อมูลวงศิลปิน</h3>
              <label style={styles.label}>ชื่อวงศิลปิน</label>
              <input
                type="text"
                name="band-name"
                placeholder="กรอกชื่อวงศิลปิน"
                style={styles.input}
              />

              <label style={styles.label}>รูปวงศิลปิน</label>
              <div
                className="image-upload"
                style={styles.uploadBox}
                onClick={(e) => triggerFileInput(e.currentTarget)}
              >
                <img className="preview-image" style={styles.previewImage} alt="preview" />
                <i className="ri-file-add-line upload-icon" style={styles.icon}></i>
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </section>

            <section>
              <h3 style={styles.sectionTitle}>ข้อมูลศิลปิน</h3>

              <label style={styles.label}>ชื่อ-นามสกุล (ไทย)</label>
              <input type="text" name="nickname-th" style={styles.input} />

              <label style={styles.label}>ชื่อ-นามสกุล (อังกฤษ)</label>
              <input type="text" name="nickname-en" style={styles.input} />

              <label style={styles.label}>ชื่อเล่น (ไทย)</label>
              <input type="text" name="realname-th" style={styles.input} />

              <label style={styles.label}>ชื่อเล่น (อังกฤษ)</label>
              <input type="text" name="realname-en" style={styles.input} />

              <label style={styles.label}>อายุ</label>
              <input type="number" name="age" style={styles.input} />

              <label style={styles.label}>Instagram</label>
              <input type="text" name="instagram" style={styles.input} />

              <label style={styles.label}>รูปศิลปิน</label>
              <div
                className="image-upload"
                style={styles.uploadBox}
                onClick={(e) => triggerFileInput(e.currentTarget)}
              >
                <img className="preview-image" style={styles.previewImage} alt="preview" />
                <i className="ri-file-add-line upload-icon" style={styles.icon}></i>
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </section>

            <section>
              <h3 style={styles.sectionTitle}>ช่องทางการติดต่อ</h3>

              <label style={styles.label}>Facebook</label>
              <input type="text" name="facebook" style={styles.input} />

              <label style={styles.label}>X (Twitter)</label>
              <input type="text" name="twitter" style={styles.input} />

              <label style={styles.label}>YouTube</label>
              <input type="text" name="youtube" style={styles.input} />

              <label style={styles.label}>Spotify</label>
              <input type="text" name="spotify" style={styles.input} />
            </section>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <button type="reset" style={{ backgroundColor: "#bbb", padding: "10px 20px", borderRadius: "5px", color: "white" }}>
                ยกเลิก
              </button>
              <button type="submit" style={{ backgroundColor: "#7c3aed", padding: "10px 20px", borderRadius: "5px", color: "white" }}>
                อัปโหลด
              </button>
            </div>
          </form>
        </main>

        <footer
          style={{
            background: "linear-gradient(to bottom, #c084fc, #7c3aed)",
            padding: "50px",
            marginTop: "20px",
          }}
        />
      </div>
    </>
  );
}
