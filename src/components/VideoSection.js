import React from "react";
import Video2 from "./video/website.mp4";

export const VideoSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        display: "flex",
        height: "100%",
        overflow: "hidden",
        justifyContent: "end",
        width: "100%",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .hero-section {
              flex-direction: column;
              height: auto !important;
              padding-top:170px
            }

            section > div:first-child {
              order: 2;
              width: 100% !important;
              padding: 20px;
              text-align: center;
            }

            section > div:last-child {
              order: 1;
              width: 100% !important;
              height: 250px !important;
            }

            section video {
              height: 100% !important;
              width: 100% !important;
              object-fit: cover;
            }

            section h1 {
              font-size: 40px !important;
              line-height: 1.3 !important;
            }

            section p {
              font-size: 14px !important;
              line-height: 1.6 !important;
            }
          }
        `}
      </style>

      {/* Left Content */}
      <div
        style={{
          flex: "0 0 32.5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "105px",
            fontWeight: "800",
            lineHeight: "1",
            marginBottom: "20px",
            fontFamily: "bison",
            letterSpacing: "0.3px",
            color: "#333333",
          }}
        >
          LOOK SHARP.
          <br />
          SOUND LOUD.
          <br />
          GROW FAST.
          <br />
          WITH K&D.
        </h1>

        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.8",
            maxWidth: "500px",
            marginBottom: "30px",
          }}
        >
          WE CREATE BRANDS THAT DEMAND ATTENTION.
          <br />
          OUR DESIGNS HOOK YOUR AUDIENCE,
          <br />
          OUR STRATEGIES KEEP THEM ENGAGED,
          <br />
          AND OUR IDEAS TURN INTEREST INTO IMPACT.
        </p>

        <small style={{ fontSize: "12px", color: "#333" }}>
          LET'S TALK. NO STRINGS ATTACHED!
        </small>
      </div>

      {/* Video Section */}
      <div style={{ flex: "0 0 60%", position: "relative" }}>
        <video
          src={Video2}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
};
