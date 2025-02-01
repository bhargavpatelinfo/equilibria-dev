import React from "react";
import { cn, groupItems } from "../../../lib/utils/helperFunctions";
import { SliderSectionType } from "../../../lib/sanity/types";

const SliderSection: React.FC<SliderSectionType> = (block) => {
  const { id, texts } = block || {};
  const groupData = groupItems<string>(texts || [], 1);
  return (
    <section id={id} className="bg-lightPink">
      <div className="marqueeLogo py-5">
        {[...Array(2)]?.map((_, repeatIndex) => (
          <ul
            key={repeatIndex}
            className="flex justify-between items-center gap-8 marqueeLogoInner min-w-full  px-4 h-[60px] sm:h-[80px] lg:h-[112px]"
          >
            {groupData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-8"
                >
                  <div className={`text-nowrap text-darkPurple text-lg sm:text-xl font-semibold `}>
                    {item}
                  </div>
                  <div className="w-[14px] h-[14px] bg-darkPink rounded-full" />
                </div>
              );
            })}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
