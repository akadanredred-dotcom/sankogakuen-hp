"use client";

export default function GoogleMap() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
        margin: "20px 0",
      }}
    >
      {/* 左側：Google Map */}
      <div style={{ flex: "1 1 450px", minHeight: "350px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.380090227986!2d139.69758357578712!3d35.66764197259161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cafbc40da51%3A0x177ea9e2b738d2fb!2z44CSMTUwLTAwNDEg5p2x5Lqs6YO95riL6LC35Yy656We5Y2X77yS5LiB55uu77yR4oiS77yRIOWbveeri-S7o-OAheacqOertuaKgOWgtOesrOS4gOS9k-iCsumkqA!5e0!3m2!1sja!2sjp!4v1782715287168!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{
            border: 0,
            minHeight: "350px",
            borderRadius: "8px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 右側：場所の詳細情報 */}
      <div style={{ flex: "1 1 300px", padding: "10px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>国立代々木競技場 第一体育館</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          〒150-0041 東京都渋谷区神南2丁目1−1
        </p>
      </div>
    </div>
  );
}