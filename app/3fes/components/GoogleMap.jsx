"use client";

export default function GoogleMap() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "420px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.281709785447!2d139.69239067578727!3d35.67006487259074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb479620a33%3A0x34bcc78ce7f8bf3e!2z5Luj44CF5pyo5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1781570122971!5m2!1sja!2sjp"
        style={{
          border: "none",
          display: "block",
          width: "100%",
          height: "100%",
          transform: "scale(1.03)",
          transformOrigin: "center center",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}