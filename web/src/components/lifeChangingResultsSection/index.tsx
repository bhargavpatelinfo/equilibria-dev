import React from "react";
import { LifeChangingResultsSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Button from "../global/button";

const LifeChangingResultsSection: React.FC<LifeChangingResultsSectionType> = (
  block
) => {
  const { id, title, buttons, titleValueUnit, headLine } = block || {};
  return (
    <section id={id} className="bg-maroon py-16">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-20 xl:gap-5">
          <div className="xl:max-w-[741px] w-full flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              {headLine && <div className="text-lightPink text-xl tracking-[-1px] font-Kulim">{headLine}</div>}
              {title?.custom_rich_text && (
                <div className="[&>*]:text-[42px] md:[&>*]:text-[60px] xl:[&>*]:text-[84px] [&>*]:text-white [&>*]:tracking-[-2px] [&>*]:font-Kulim [&>*]:leading-[120%]">
                  <RichText block={title} />
                </div>
              )}
            </div>
            {buttons?.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 ">
                {buttons?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Button block={item} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="max-w-[560px] w-full">
            {titleValueUnit?.title && (
              <div
              //  style={{ backgroundColor: titleValueUnit?.color?.hex || "" }}
              className="hidden md:flex flex-col gap-1 items-center justify-center h-[400px] md:h-[560px] border-[45px] border-darkPink rounded-full"
               >
                <div className="text-[100px] xl:text-[134px] tracking-[-2%] text-lightPink font-semibold font-Kulim leading-[120%]">{`${titleValueUnit?.value} ${titleValueUnit?.suffix}`}</div>
                <span className="text-xl tracking-[-2%] font-Kulim text-lightPink max-w-[280px] mx-auto w-full text-center">
                  {titleValueUnit?.title && <div>{titleValueUnit?.title}</div>}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeChangingResultsSection;
