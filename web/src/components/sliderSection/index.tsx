import React from "react";
import { cn, groupItems } from "../../../lib/utils/helperFunctions";
import { SliderSectionType } from "../../../lib/sanity/types";

const SliderSection: React.FC<SliderSectionType> = (block) => {
  const { id, texts } = block || {};
  const groupData = groupItems<string>(texts || [], 1);
  return (
    <section id={id}>
      <div className="marqueeLogo py-5">
        {[...Array(2)]?.map((_, repeatIndex) => (
          <div
            key={repeatIndex}
            className="flex justify-between items-center gap-8 min-w-full marqueeLogoInner px-4 md:px-8 xl:px-12"
          >
            {groupData?.map((groupItem, groupIndex) => {
              return (
                <ul
                  key={groupIndex}
                  className={cn(
                    `flex flex-col gap-10`,
                    groupIndex === 0 && "mt-[40px]",
                    groupIndex === 1 && "mt-[20px]",
                    groupIndex === 2 && "mt-[16px]",
                    groupIndex === 5 && "mt-[16px]",
                    groupIndex === 6 && "mt-[20px]",
                    groupIndex === 7 && "mt-[40px]"
                  )}
                >
                  {groupItem?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`rounded-lg shadow-logoShadow flex justify-center items-center w-[56px] md:w-[70px] lg:w-[90px] h-[56px] md:h-[70px] lg:h-[90px]  
                `}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
