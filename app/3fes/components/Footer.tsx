"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = (e, color = "#000000") => {
    e.target.style.color = color;
    e.target.style.textDecoration = "underline";
  };

  const handleMouseLeave = (e, color = "#606060") => {
    e.target.style.color = color;
    e.target.style.textDecoration = "none";
  };

  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        padding: "16px 20px 12px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* =================【左側ブロック】================= */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", width: "100%" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#000000",
              letterSpacing: "0.05em",
            }}
          >
            赤団HP
          </div>

          <div>
            
              href="http://localhost:3000/components"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "#f5f5f5",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e8e8e8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f5f5f5")
              }
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#606060"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* =================【真ん中ブロック】================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "13px",
            width: "100%",
          }}
        >
          <Link
            href="/news"
            style={{
              color: "#606060",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            お知らせ
          </Link>
          <Link
            href="/shop"
            style={{
              color: "#606060",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            グッズ購入
          </Link>
          <Link
            href="/contact"
            style={{
              color: "#606060",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            お問い合わせ
          </Link>
        </div>

        {/* =================【右側ブロック】================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          <button
            onClick={() => router.back()}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "#606060",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "500",
              fontFamily: "sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            赤団について
          </button>

          
            href="#"
            onClick={scrollToTop}
            style={{
              color: "#606060",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "700",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            トップへ戻る ↑
          </a>
        </div>
      </div>

      {/* コピーライト */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "12px auto 0 auto",
          textAlign: "center",
          fontSize: "11px",
          color: "#a0a0a0",
          borderTop: "1px solid #f0f0f0",
          paddingTop: "8px",
        }}
      >
        &copy; 2026 赤団HP. All rights reserved.
      </div>
    </footer>
  );
}