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
          src="https://share.google/Ldbo21Q25ZdFDykuu"
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
    </div>
  );
}
