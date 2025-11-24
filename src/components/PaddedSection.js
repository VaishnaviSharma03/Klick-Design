import React from "react";

function PaddedSection({ children, margin, bordertop, padding }) {
  console.log(bordertop, margin, "================");
  return (
    <div
      style={{
        paddingTop: margin ? "" : "30px",
        paddingBottom: padding ? "" : "30px",
        display: "flex",
        justifyContent: "center",
        marginTop: margin,
        borderTop: bordertop,
      }}
    >
      {children}
    </div>
  );
}

export default PaddedSection;
