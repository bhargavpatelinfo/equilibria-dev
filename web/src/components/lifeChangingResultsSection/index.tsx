import React, { useState, useEffect } from "react";
import { LifeChangingResultsSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Button from "../global/button";
import ChangingProgressProvider from "../commons/changingProgressProvider";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LifeChangingResultsSection: React.FC<LifeChangingResultsSectionType> = (block) => {
  const { id, title, buttons, circularProgressBar, headLine } = block || {};
  const percentage = Number(circularProgressBar?.value) || 0;
  const suffix = circularProgressBar?.suffix || "%";

  // State to manage responsive font size
  const [fontSize, setFontSize] = useState("28px");
  const [strokeWidth, setStrokeWidth] = useState(9);

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth >= 1280) {
        setFontSize("30px"); // xl
      } else if (window.innerWidth >= 1024) {
        setFontSize("28px"); // lg
      } else if (window.innerWidth >= 768) {
        setFontSize("28px"); // md
      } else if (window.innerWidth >= 640) {
        setFontSize("22px"); // sm
      } else {
        setFontSize("22px"); // default
      }
    };
   

    updateFontSize(); // Call on mount
    window.addEventListener("resize", updateFontSize,);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

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
        setFontSize("28px");
        setStrokeWidth(9);
      }
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id={id} className="bg-maroon py-16">
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
                <div className="[&>*]:text-[36px] em:[&>*]:text-[46px] lg:[&>*]:text-[64px] xl:[&>*]:text-[84px] [&>*]:text-white [&>*]:tracking-[-1.68px] [&>*]:font-Kulim [&>*]:leading-[110%]">
                  <RichText block={title} />
                </div>
              )}
            </div>
            {buttons?.length > 0 && (
              <div className="flex flex-col em:flex-row gap-4">
                {buttons.map((item, index) => (
                  <div key={index}>
                    <Button block={item} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Circular Progress Section */}
          <div className="max-w-[559px] w-full">
            <ChangingProgressProvider values={[0, percentage]} >
              {(currentPercentage) => (
                <div className="relative max-w-[400px] sm:max-w-[559px] w-full ml-auto mr-auto xl:mr-0">
                  <CircularProgressbar
                    value={currentPercentage}
                    text={`${currentPercentage}${suffix}`}
                    className="size-[350px] md:size-[450px] xl:size-[560px]"
                    background
                    circleRatio={1}
                    counterClockwise={false}
                    maxValue={100}
                    minValue={0}
                    strokeWidth={strokeWidth}
                    styles={{
                      path: { 
                        stroke: circularProgressBar?.progressBarColor?.hex || "#FDC6E0" 
                      },
                      trail: { 
                        stroke: "#4A2040" 
                      },
                      text: {
                        fill: circularProgressBar?.valueColor?.hex || "#FDC6E0",
                        fontSize: fontSize,
                        fontWeight: "600",
                        letterSpacing: "-1.5px",
                        lineHeight: "110%",
                        textAlign: "center",
                      },
                      background: { 
                        fill: "#1C0917" 
                      },
                     
                    }}
                  />
                  <p className="text-lg md:text-xl tracking-[-1px] font-Kulim text-white max-w-[275px] mx-auto w-full text-center px-4 mt-2 absolute top-[55%] sm:top-[60%] translate-x-[25%] sm:translate-x-[50%] hidden em:block">
                    {circularProgressBar?.title}
                  </p>
                </div>
              )}
            </ChangingProgressProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeChangingResultsSection;
