import React from "react";
import { cn } from "../../../../lib/utils/helperFunctions";
import Image from "@/components/global/image";
import { ImageTitleListType } from "../../../../lib/sanity/types";

const ImageTitleList: React.FC<{
  imageTitleLists: ImageTitleListType[];
  itemIndex: number;
  hasAnimated: boolean;
}> = ({ imageTitleLists, itemIndex, hasAnimated }) => {
  return (
    <div>
      {imageTitleLists?.map((item, imageTitleListIndex) => {
        const { image, title, lists } = item || {};
        return (
          title && (
            <div
              key={imageTitleListIndex}
           
              className={cn(
                "transition-all duration-500",
            hasAnimated ? "delay-1000 opacity-100" : "opacity-0",
                "md:absolute bg-white p-2 xl:p-4 duration-500 transition-all  delay-800 rounded-2xl text-sm font-semibold shadow-cardSolutionShadow flex items-center gap-[11px] z-20 w-full md:w-fit justify-center",
                // left
                itemIndex === 0 &&
                  imageTitleListIndex === 0 &&
                  "translation-all delay-300 duration-500 md:left-[-120px] xl:left-[-200px] md:top-[100px] xl:top-[120px] bg-[red]",
                // left animation
                itemIndex === 0 &&
                  imageTitleListIndex === 0 &&
                  hasAnimated &&
                  "1xl:left-[-500px] bg-[teal]",
                // center
                itemIndex === 1 &&
                  imageTitleListIndex === 0 &&
                  "md:left-[-130px] top-[-20px] xl:top-[-38px]",
                itemIndex === 1 &&
                  imageTitleListIndex === 1 &&
                  "md:right-[-130px] top-[-80px]",
                // center animation
                itemIndex === 1 &&
                  imageTitleListIndex === 0 &&
                  hasAnimated &&
                  "",
                itemIndex === 1 &&
                  imageTitleListIndex === 1 &&
                  hasAnimated &&
                  "",
                // right
                itemIndex === 2 &&
                  imageTitleListIndex === 0 &&
                  "md:right-[-130px] delay-300  duration-500 top-[10px]",
                itemIndex === 2 && imageTitleListIndex === 1 && "bg-[#800062]",
                // right animation
                itemIndex === 2 &&
                  imageTitleListIndex === 0 &&
                  hasAnimated &&
                  "xl:right-[-560px]"
              )}
            >
              {image && (
                <div className="w-8 xl:w-10 h-8 xl:h-10">
                  <Image
                    src={image}
                    alt={image?.alt}
                    className="w-8 xl:w-10 h-8 xl:h-10 object-cover"
                  />
                </div>
              )}
              <div>
                <span
                  className={cn(
                    "text-[18px] xl:text-[24px] text-darkPurple font-Kulim font-semibold tracking-[-0.48px]"
                  )}
                >
                  {title}
                </span>
                {lists?.length > 0 && (
                  <ul>
                    {lists?.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                )}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default ImageTitleList;
