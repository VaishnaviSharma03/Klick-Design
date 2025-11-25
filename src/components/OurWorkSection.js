import React, { useState } from "react";
import Work from "./img/For website-13.jpg";
import Work1 from "./img/For website-14.jpg";
import Work3 from "./img/For website-15.jpg";
import Work2 from "./img/For website-16 (1).jpg";

import WorkHover from "./img/For website-13.jpg";
import Work4Hover from "./img/For website-13.jpg";
import Work3Hover from "./img/For website-13.jpg";
import Work5Hover from "./img/For website-13.jpg";

export const OurWorkSection = () => {
  const works = [
    { default: Work, hover: WorkHover },
    { default: Work1, hover: Work5Hover },
    { default: Work2, hover: Work4Hover },
    { default: Work3, hover: Work3Hover },
  ];

  const containerStyle = {
    width: "85%",
    backgroundColor: "beige",
    fontFamily: "Arial, sans-serif",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    maxWidth: "100%",
    margin: "0 auto",
  };

  const imageContainerStyle = {
    width: "100%",
    aspectRatio: "1",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {works.map((item, index) => (
          <div
            key={index}
            style={imageContainerStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={hoveredIndex === index ? item.hover : item.default}
              alt={`Work ${index + 1}`}
              style={imageStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
