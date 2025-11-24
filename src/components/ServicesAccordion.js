import React, { useState, useRef, useEffect } from "react";

export const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const services = [
    {
      title: "CONTENT CREATION",
      content:
        "We create compelling content that resonates with your brand and audience.",
    },
    {
      title: "PERFORMANCE MARKETING",
      content:
        "We deliver high-performance ads to drive measurable business results.",
    },
    {
      title: "VISUAL MERCHANDISING",
      content:
        "We create visually captivating product presentations to increase in-store engagement.",
    },
    {
      title: "INFLUENCER MARKETING",
      content:
        "We connect your brand with top influencers to expand reach and credibility.",
    },
    {
      title: "PHOTOGRAPHY & VIDEOGRAPHY",
      content: "Professional photo & video services tailored to your branding.",
    },
    {
      title: "PR ACTIVATIONS",
      content:
        "We help you build strategic media relationships and buzz-worthy campaigns.",
    },
  ];

  const contentRefs = useRef([]);

  useEffect(() => {
    const updatedHeights = services.map(
      (_, index) => contentRefs.current[index]?.scrollHeight || 0
    );
    setHeights(updatedHeights);
  }, []);

  const containerStyle = {
    width: "85%",
    // backgroundColor: "#fffaf0",
  };

  const itemStyle = {
    border: "1px solid #333",
    padding: "20px",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    flexWrap: "wrap",
    // fontFamily: "gotham",
  };

  const arrowStyle = {
    width: "20px",
    height: "20px",
    transition: "transform 0.3s ease",
  };

  const contentWrapperStyle = (isActive, height) => ({
    maxHeight: isActive ? `${height}px` : "0px",
    overflow: "hidden",
    transition: "max-height 0.4s ease",
    borderBottom: isActive ? "1px solid #333" : "none",
    borderLeft: "1px solid #333",
    borderRight: "1px solid #333",
    // backgroundColor: "#fffaf0",
  });

  const contentInnerStyle = {
    paddingTop: "25px",
    paddingBottom: "25px",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle} id="Service">
      {services.map((service, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index}>
            <div
              style={itemStyle}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span>{service.title}</span>
              <svg
                style={arrowStyle}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" /> {/* shaft */}
                <polyline points="12 5 19 12 12 19" /> {/* arrow head */}
              </svg>
            </div>

            <div
              style={contentWrapperStyle(isActive, heights[index])}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div style={contentInnerStyle}>{service.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
