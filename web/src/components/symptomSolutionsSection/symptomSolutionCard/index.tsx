import React from "react";
import { SymptomSolutionType } from "../../../../lib/sanity/types";
import Image from "@/components/global/image";
import { cn } from "../../../../lib/utils/helperFunctions";
import ImageTitleList from "../imageTitleList";

const SymptomSolutionCard: React.FC<{
  block: SymptomSolutionType;
  itemIndex: number;
  hasAnimated: boolean;
}> = ({ block, itemIndex, hasAnimated }) => {
  const { image, imageTitleLists } = block || {};
  return (
    <div
      className={cn(
        "relative transition-transform duration-300  animate-float flex flex-col items-center",
        itemIndex === 1 &&
          "w-auto esm:w-[300px] md:w-[300px] xl:w-[406px] h-full xl:h-[590px] bg-pink-200 shadow-xl z-10",
        itemIndex === 0 &&
          "absolute w-auto esm:w-[300px] md:w-[280px] xl:w-[331px] h-full md:h-[400px] xl:h-[514px] bg-pink-100 shadow-lg -z-10 scale-90 left-1/2 -translate-x-1/2 -top-5",
        itemIndex === 2 &&
          "absolute w-auto esm:w-[300px] md:w-[280px] xl:w-[331px] h-full md:h-[400px] xl:h-[514px] bg-pink-100 shadow-lg -z-10 scale-90 left-1/2 -translate-x-1/2 top-5"
      )}
    >
      {image && (
        <Image
          src={image}
          alt={image?.alt}
          className={cn(
            "w-full h-full object-cover z-20 transition-all duration-500 rounded-[32px]",
            itemIndex === 0 && hasAnimated
              ? " -translate-x-[200px] mr-[500px] -translate-y-[-60px] delay-800 delay-300 scale-110 md:rotate-[-20deg] opacity-100"
              : "-translate-x-[30px]",
            itemIndex === 1 && hasAnimated && "scale-105 -translate-y-8",
            itemIndex === 2 && hasAnimated
              ? "translate-x-[330px] translate-y-[20px] scale-110 delay-800 delay-300 md:rotate-[20deg] opacity-100"
              : "translate-x-[30px]"
          )}
        />
      )}
      {imageTitleLists?.length > 0 && (
        <ImageTitleList
          hasAnimated={hasAnimated}
          imageTitleLists={imageTitleLists}
          itemIndex={itemIndex}
        />
      )}
    </div>
  );
};

export default SymptomSolutionCard;
