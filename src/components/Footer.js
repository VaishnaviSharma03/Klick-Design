import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "./img/Asset 2.png";
export const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          width: "85%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "15%" }}>
          <img alt="logo" src={Logo} style={{ width: "70%" }} />
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            gap: "30px",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="https://www.instagram.com/klickanddesign.in"
            style={{
              textStyle: "none",
              color: "black",
              textDecoration: "none",
              border: "none",
            }}
          >
            <InstagramIcon size={30} color="#2c2c2c"></InstagramIcon>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572838170919"
            style={{
              textStyle: "none",
              color: "black",
              textDecoration: "none",
              border: "none",
            }}
          >
            <FacebookIcon size={30} color="#2c2c2c"></FacebookIcon>
          </a>

          <LinkedInIcon size={30} color="#2c2c2c"></LinkedInIcon>
        </div>
      </div>
    </div>
  );
};
