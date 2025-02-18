import React from "react";
import { SymptomSolutionType } from "../../../../lib/sanity/types";
import Image from "@/components/global/image";
import { cn } from "../../../../lib/utils/helperFunctions";

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
                        itemIndex === 0 && "",
                        itemIndex === 1 && "",
                        itemIndex === 2 && "",
                        itemIndex === 0 && hasAnimated
                            ? " -translate-x-[200px] mr-[500px] -translate-y-[-60px] delay-800 delay-300 scale-110 md:rotate-[-20deg] opacity-100"
                            : "-translate-x-[30px] ",
                        itemIndex === 1 && hasAnimated ? "scale-105 -translate-y-8" : "",
                        itemIndex === 2 && hasAnimated
                            ? "translate-x-[330px] translate-y-[20px] scale-110 delay-800 delay-300 md:rotate-[20deg] opacity-100"
                            : "translate-x-[30px] "
                    )}
                />
            )}
            {imageTitleLists?.length > 0 &&
                <div>
                    {imageTitleLists?.map((item, imageTitleListIndex) => {
                        const { image, title, lists } = item || {}
                        return (
                            title && (
                                <div
                                    key={imageTitleListIndex}
                                    className={cn(
                                        "md:absolute  bg-white p-2 xl:p-4 duration-500 transition-all  delay-800 rounded-2xl text-sm font-semibold shadow-cardSolutionShadow flex items-center gap-[11px] z-20 w-full md:w-fit justify-center",
                                        imageTitleListIndex === 0 && "",
                                        imageTitleListIndex === 1 && "",
                                        itemIndex === 0 &&
                                        ` translation-all delay-300 duration-500 md:left-[-120px] xl:left-[-200px] ${hasAnimated ? `1xl:left-[-500px]` : `1xl:left-[0px]`}  md:top-[100px] xl:top-[120px] `,
                                        itemIndex === 1 && "md:left-[-130px] top-[-20px] xl:top-[-38px]",
                                        itemIndex === 2 &&
                                        `md:right-[-130px] delay-300  duration-500 ${hasAnimated ? `xl:right-[-440px]` : `xl:right-[0px]`}  top-[10px] xl:top-[-20px]`
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
                                                "text-[18px] xl:text-[24px] text-darkPurple font-Kulim font-semibold tracking-[-0.48px]",
                                                itemIndex === 0 && "",
                                                itemIndex === 1 && "",
                                                itemIndex === 2 && "!text-darkPink"
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
                        )
                    })}
                </div>
            }
        </div >
    );
};

export default SymptomSolutionCard;