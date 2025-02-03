import React from "react";
import { LifeChangingResultsSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Button from "../global/button";
import CircularProgressBar from "../commons/circularProgressBar";

const LifeChangingResultsSection: React.FC<LifeChangingResultsSectionType> = (
  block
) => {
  const { id, title, buttons, circularProgressBar, headLine } = block || {};
  const percentage = circularProgressBar?.value || 0;
  const suffix = circularProgressBar?.suffix || "%";
  const text = `${percentage}${suffix}`;

  return (
    <section id={id} className="bg-maroon py-16">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-20 xl:gap-8">
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
          {circularProgressBar?.title && (
            <div className="max-w-[559px] w-full hidden lg:block">
              <CircularProgressBar
                value={Number(percentage)}
                progressBarColor={circularProgressBar?.progressBarColor?.hex || ""}
                size={559}
                strokeWidth={40}
                backgroundBarColor="#4D0F3B"
                mainClassName=""
                parentClassName="absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
                svgClassName=""
                strokeWidthClassName="stroke-[40px]"
              >
                <div
                  className="text-[60px] em:text-[80px] md:text-[100px] xl:text-[134px] tracking-[-2.68px] font-semibold font-Kulim leading-[110%] text-center"
                  style={{ color: circularProgressBar?.valueColor?.hex || "#FDC6E0" }}
                >
                  {text}
                </div>
                <p className="text-base em:text-xl tracking-[-1px] font-Kulim text-white max-w-[280px] mx-auto w-full text-center px-4">
                  {circularProgressBar?.title}
                </p>
              </CircularProgressBar>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LifeChangingResultsSection;
