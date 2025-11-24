import React, { useEffect, useState, useRef, useMemo } from "react";

export const CreativeIdeasSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [numbers, setNumbers] = useState([0, 0, 0]);

  const finalValues = useMemo(
    () => [
      { number: 6.2, text: "AVG. ENGAGEMENT RATE", suffix: "%" },
      { number: 91, text: "TRUSTED FOR THE LONG RUN", suffix: "%" },
      { number: 14, text: "REACH THAT CONNECTS", suffix: "M+" },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const node = sectionRef.current;

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = finalValues.map((item, i) => {
      let current = 0;

      const id = setInterval(() => {
        current += Math.random() * (item.number / 8);

        if (current >= item.number) {
          current = item.number;
          clearInterval(id);
        }

        setNumbers((prev) => {
          const updated = [...prev];
          updated[i] = parseFloat(current.toFixed(1));
          return updated;
        });
      }, 60);

      return id;
    });

    return () => {
      intervals.forEach((id) => clearInterval(id));
      setNumbers([0, 0, 0]);
    };
  }, [isVisible, finalValues]);

  return (
    <section className="creative-section" ref={sectionRef}>
      <style>{`
        .creative-section {
          width: 85%;
          position: relative;
          z-index: 1;
          margin: 0 auto;
        }
        .creative-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
        }
        .creative-heading-wrap {
          flex: 1 1 40%;
          order: 1;
          text-align: center;
        }
        .creative-heading {
          font-family: bison, sans-serif;
          font-weight: 900;
          font-size: 42px;
          line-height: 1.15;
          margin: 0 0 8px 0;
        }
        .creative-left {
          flex: 1 1 55%;
          order: 2;
        }
        .creative-text {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
          color: #111;
        }
        .creative-boxes {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }
        .creative-box {
          background: #333333;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 55px 20px;
          border-radius: 6px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .creative-box:hover {
          transform: translateY(-5px);
        }
        .creative-box-number {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .creative-box-text {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          section > div:last-child {
            order: 1;
            width: 100% !important;
            height: 100% !important;
          }
        }

        @media (min-width: 769px) {
          .creative-container {
            align-items: stretch;
            width: 100%;
          }
          .creative-left {
            order: 1;
            flex: 1 1 55%;
            text-align: left;
          }
          .creative-heading-wrap {
            order: 2;
            flex: 1 1 40%;
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .creative-heading {
            font-size: 84px;
            margin: 0;
            color: #333333;
          }
          .creative-boxes {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .creative-box-number {
            font-size: 60px;
          }
        }
      `}</style>

      <div className="creative-container">
        <div className="creative-heading-wrap">
          <h2 className="creative-heading">
            BRING YOUR <br /> CREATIVE IDEAS <br /> INTO REALITY!
          </h2>
        </div>

        <div className="creative-left">
          <p className="creative-text">
            TRENDS MAY COME AND GO, BUT ELEGANCE NEVER FADES. OUR WORK BLENDS
            CREATIVITY WITH TIMELESS APPEAL, ENSURING YOUR BRAND FEELS RELEVANT
            TODAY AND REMAINS REMARKABLE TOMORROW.
          </p>

          <div className="creative-boxes">
            {finalValues.map((item, index) => (
              <div className="creative-box" key={index}>
                <div className="creative-box-number">
                  {numbers[index]}
                  {item.suffix}
                </div>
                <div className="creative-box-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
