import React, { useEffect, useState } from "react";
import Office from "./img/Office1.jpg";

export const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: isMobile ? "85%" : "85%",
    margin: "0 auto",
    boxSizing: "border-box",
    gap: isMobile ? "30px" : "0",
  };

  const textSectionStyle = {
    flex: 1,
    paddingRight: isMobile ? "0" : "40px",
    textAlign: isMobile ? "center" : "left",
  };

  const headingStyle = {
    fontSize: isMobile ? "18px" : "24px",
    fontWeight: "bold",
    marginBottom: isMobile ? "10px" : "20px",
    lineHeight: "1",
    color: "#333333",
  };

  const subHeadingStyle = {
    fontSize: isMobile ? "14px" : "16px",
    color: "#666",
    lineHeight: "1.4",
    marginTop: isMobile ? "15px" : "30px",
  };

  const imageSectionStyle = {
    flex: 1,
    display: "flex",
    justifyContent: isMobile ? "center" : "end",
  };

  const imageStyle = {
    width: isMobile ? "100%" : "85%",
    maxHeight: "600px",
    height: "auto",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle} id="AboutUs">
      <div style={textSectionStyle}>
        <div style={headingStyle}>
          WE ARE A PASSIONATE TEAM OF GRAPHIC DESIGNERS AND EDITORS..
        </div>
        <div style={headingStyle}>
          WE BELIEVE IN THE POWER OF VISUAL STORYTELLING.
        </div>
        <div style={subHeadingStyle}>
          WE ARE A PASSIONATE TEAM OF GRAPHIC DESIGNERS AND EDITORS. WE BELIEVE
          IN THE POWER OF CREATIVITY AND VISUAL COMMUNICATION. WE SPECIALIZE IN
          CREATING FUNCTIONAL, AESTHETICALLY PLEASING DESIGNS AND POLISHED EDITS
          THAT SOLVE YOUR PROBLEMS AND CONNECT YOU WITH YOUR AUDIENCE.
        </div>
      </div>

      <div style={imageSectionStyle}>
        <img src={Office} alt="Team brainstorming" style={imageStyle} />
      </div>
    </div>
  );
};
