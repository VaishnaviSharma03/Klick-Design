import React from "react";
import Img from "./img/Asset 2.png";
import "./css/Main.css";

import { useEffect, useState } from "react";

export const Clients = () => {
  const logos = [Img, Img, Img, Img, Img, Img, Img, Img, Img, Img];

  const logosPerSlide = 5;
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(logos.length / logosPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Group the logos into slides of 5
  const groupedLogos = [];
  for (let i = 0; i < logos.length; i += logosPerSlide) {
    groupedLogos.push(logos.slice(i, i + logosPerSlide));
  }

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        backgroundColor: "#fdf7ec",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Left side */}
      <div
        style={{
          minWidth: "200px",
          padding: "30px 10px",
          textAlign: "center",
          borderRight: "1px solid black",
          backgroundColor: "#fdf7ec",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            margin: 0,
            color: "#1c1c1c",
          }}
        >
          50+
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#1c1c1c",
          }}
        >
          CLIENTS
        </p>
      </div>

      {/* Right side with sliding logos */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${groupedLogos.length * 100}%`,
            transform: `translateX(-${
              currentSlide * (100 / groupedLogos.length)
            }%)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {groupedLogos.map((group, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flex: `0 0 ${100 / groupedLogos.length}%`,
                padding: "20px 0",
              }}
            >
              {group.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Logo ${idx}`}
                  style={{
                    height: "60px",
                    maxWidth: "120px",
                    objectFit: "contain",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
