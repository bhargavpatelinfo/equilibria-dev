import React, { useState, useEffect, useRef } from "react";
import { LifeChangingResultsSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Button from "../global/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LifeChangingResultsSection: React.FC<LifeChangingResultsSectionType> = (
  block
) => {
  const { id, title, buttons, circularProgressBar, headLine } = block || {};
  const suffix = circularProgressBar?.suffix || "%";

  const [fontSize, setFontSize] = useState("28px");
  const [strokeWidth, setStrokeWidth] = useState(9);
  const [percentage, setPercentage] = useState(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setFontSize("16px");
        setStrokeWidth(8);
      } else if (width < 1024) {
        setFontSize("20px");
        setStrokeWidth(8);
      } else if (width < 1280) {
        setFontSize("24px");
        setStrokeWidth(8);
      } else {
        setFontSize("26px");
        setStrokeWidth(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const targetValue = circularProgressBar?.value || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Reset percentage before starting animation
          setPercentage(0);
          const interval = setInterval(() => {
            setPercentage((prev) => {
              if (prev >= targetValue) {
                clearInterval(interval);
                return targetValue;
              }
              return prev + 1;
            });
          }, 30);
        } else {
          setPercentage(0); // Reset when out of view
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [circularProgressBar?.value]);

  return (
    <section id={id} ref={sectionRef} className="bg-maroon py-16">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-10 em:gap-20 xl:gap-8">
          <div className="xl:max-w-[741px] w-full flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              {headLine && (
                <div className="text-lightPink text-xl tracking-[-1px] font-Kulim">
                  {headLine}
                </div>
              )}
              {title?.custom_rich_text && (
                <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 xl:[&>*]:text-84 [&>*]:text-white [&>*]:tracking-[-1.68px] [&>*]:font-Kulim [&>*]:leading-[110%]">
                  <RichText block={title} />
                </div>
              )}
            </div>
            {buttons?.length > 0 && (
              <div className="flex flex-col em:flex-row gap-4">
                {buttons?.map((item, index) => (
                  <div key={index}>
                    <Button block={item} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Circular Progress Section */}
          <div className="max-w-[559px] w-full">
            <div className="relative max-w-[400px] sm:max-w-[559px] w-full ml-auto mr-auto xl:mr-0">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}${suffix}`}
                className="size-[350px] md:size-[450px] xl:size-[560px]"
                background
                circleRatio={1}
                counterClockwise={false}
                maxValue={100}
                minValue={0}
                strokeWidth={strokeWidth}
                styles={buildStyles({
                  trailColor: "#4A2040",
                  strokeLinecap: "butt",
                  backgroundColor: "#1C0917",
                  pathColor:
                    circularProgressBar?.progressBarColor?.hex || "#FDC6E0",
                  textColor:
                    circularProgressBar?.valueColor?.hex || "#FDC6E0",
                  pathTransitionDuration: 1,
                  rotation: 1,
                  textSize: fontSize,
                })}
              />

              <p className="text-lg md:text-xl tracking-[-1px] font-Kulim text-white max-w-[275px] mx-auto w-full text-center px-4 mt-2 absolute top-[55%] sm:top-[60%] translate-x-[25%] sm:translate-x-[50%] hidden em:block">
                {circularProgressBar?.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeChangingResultsSection;