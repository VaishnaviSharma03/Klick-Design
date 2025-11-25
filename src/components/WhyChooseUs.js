import React from "react";
export const WhyChooseUs = ({ text }) => {
  const sectionStyle = {
    backgroundColor: "#333333",
    padding: "20px 0",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#fff",
    fontSize: "40px",
    letterSpacing: "4px",
    fontWeight: "600",
    fontFamily: "Bison, Sans-serif",
    margin: 0,
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{text}</h2>
    </section>
  );
};
