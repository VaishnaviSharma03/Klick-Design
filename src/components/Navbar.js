import React, { useState, useEffect } from "react";
import LOGO from "./img/logo.png";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = ["WORK", "SERVICE", "ABOUT US", "CONTACT US"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "85%",
      }}
    >
      <div>
        <img
          alt="Logo"
          src={LOGO}
          style={{ height: isMobile ? "55px" : "85px" }}
        />
      </div>

      {!isMobile && (
        <div>
          <ul style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            {navItems.map((item) => (
              <li
                key={item}
                style={{ listStyle: "none", color: "white", cursor: "pointer" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isMobile && (
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "22px",
              cursor: "pointer",
              padding: 0,
            }}
          >
            &#9776; {/* ☰ */}
          </button>

          {isOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                marginTop: "8px",
                backgroundColor: "black",
                padding: "10px 14px",
                borderRadius: "4px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  margin: 0,
                  padding: 0,
                }}
              >
                {navItems.map((item) => (
                  <li
                    key={item}
                    style={{
                      listStyle: "none",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
