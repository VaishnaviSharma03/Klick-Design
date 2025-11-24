// src/components/CaseStudySection.jsx
import React, { useState, useEffect, useCallback } from "react"; // ⬅️ useCallback added
import Img1 from "./img/Img-03 (1).jpg";
import Img2 from "./img/Img-02.jpg";
import Img3 from "./img/Img-03.jpg";
import Img4 from "./img/Img-04.jpg";
import Img5 from "./img/Img-05.jpg";
import Img6 from "./img/Img-06.jpg";
import Img7 from "./img/Img-07.jpg";
import Img8 from "./img/Img-08.jpg";
import Img9 from "./img/Img-09.jpg";
import Img10 from "./img/Img-10.jpg";
import Img11 from "./img/Img-11.jpg";
import Img12 from "./img/Img-12.jpg";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const slides = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
  { id: 6, img: Img6 },
  { id: 7, img: Img7 },
  { id: 8, img: Img8 },
  { id: 9, img: Img9 },
  { id: 10, img: Img10 },
  { id: 11, img: Img11 },
  { id: 12, img: Img12 },
];

export const ProductSwiper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  // ✅ stable handleNext
  const handleNext = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  }, [maxSteps]);

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  const goToStep = (index) => {
    setActiveStep(index);
  };

  // ✅ auto-slide effect with correct dependency
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [handleNext]); // eslint is happy now

  return (
    <Box
      sx={{
        width: "85%",
        bgcolor: "#f4eedf",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {/* OUTER BORDER */}
      <Box
        sx={{
          width: "100%",
          border: "1px solid #d5c9aa",
          bgcolor: "#f4eedf",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* TEXT LEFT (your “right” visually but first in DOM) */}
        <Box
          sx={{
            flex: { xs: 1, md: 2 },
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#2a2a2a",
            fontFamily: `"Helvetica Neue", Arial, sans-serif`,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              letterSpacing: 2,
              mb: 2,
              fontSize: { xs: 22, md: 30 },
            }}
          >
            AKOYA JEWELS
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              letterSpacing: 1,
              textTransform: "uppercase",
              mb: 4,
            }}
          >
            CAMPAIGN SHOOT
            <br />
            PRODUCT SHOOT
          </Typography>

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: 1,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Impact Highlights:
            </Typography>

            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              <li>
                CREATED VISUALLY STRIKING CONTENT THAT BOOSTED ONLINE ENGAGEMENT
              </li>
              <li>CAPTURED PRODUCT DETAILS TO DRIVE MORE CUSTOMER INTEREST</li>
              <li>
                HELPED BRING MORE TRAFFIC TO THE WEBSITE THROUGH STRONG VISUALS
              </li>
              <li>
                STRENGTHENED THE BRAND&apos;S IMAGE AMONG PREMIUM JEWELLERY
                BUYERS
              </li>
            </ul>
          </Box>
        </Box>

        {/* VERTICAL LINE */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "1px",
            bgcolor: "#d5c9aa",
          }}
        />

        {/* IMAGE RIGHT */}
        <Box
          sx={{
            flex: { xs: 1, md: 3 },
            p: { xs: 2, md: 3 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={slides[activeStep].img}
              alt={`Slide ${activeStep + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />

            {/* left arrow */}
            <IconButton
              onClick={handleBack}
              sx={{
                position: "absolute",
                top: "50%",
                left: 16,
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.8)",
                "&:hover": { bgcolor: "rgba(255,255,255,1)" },
              }}
            >
              <KeyboardArrowLeft sx={{ color: "#555" }} />
            </IconButton>

            {/* right arrow */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "50%",
                right: 16,
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.8)",
                "&:hover": { bgcolor: "rgba(255,255,255,1)" },
              }}
            >
              <KeyboardArrowRight sx={{ color: "#555" }} />
            </IconButton>

            {/* dots */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {slides.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => goToStep(index)}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: index === activeStep ? "#333" : "rgba(0,0,0,0.3)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
