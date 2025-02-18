import React, { useEffect, useRef, useState } from "react";
import { FaqSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import { cn } from "../../../lib/utils/helperFunctions";

export const PlusCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#071A34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const MinusCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#071A34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

const FaqSection: React.FC<FaqSectionType> = (block) => {
  const { title, questionAndAnswers } = block || {};

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (contentRef.current && activeIndex !== null) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [activeIndex]);

  return (
    <section className="mb-[80px] lg:mb-[100px] xl:mb-[160px]">
      <div className="container bg-pink py-14 em:py-20 xl:rounded-3xl">
        <div className="max-w-[968px] mx-auto w-full">
          {title?.custom_rich_text && (
            <div className="[&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-gray900 [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] pl-4 em:pl-6">
              <RichText block={title} />
            </div>
          )}
          <div className="flex flex-col gap-5 mt-14 md:mt-20">
            {questionAndAnswers.map((item, index) => {
              const { question, answer } = item || {};
              const isSelected = index === activeIndex;
              return (
                <div className={`p-4 em:p-6 border-b border-b-[#DDD] transition-all duration-700 ease-in-out ${isSelected ? "bg-[#FFE7E7]" : "bg-transparent"} `} 
                key={index}>
                  <div
                    className="flex items-center justify-between gap-[10px] cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    {question && (
                      <h3 className={`text-xl  font-semibold font-Kulim  transition-all duration-700 ease-in-out ${isSelected ? "text-darkPink" : "text-gray900"}`}>
                        {question}
                      </h3>
                    )}
                    {question && (
                      <div className="block">
                        <div
                          className={`transition-all duration-700 ease-in-out ${isSelected ? "rotate-180 " : ""}`}
                        >
                          {!isSelected ? <PlusCircle /> : <MinusCircle />}
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    ref={contentRef}
                    className={cn(
                      "transition-all duration-500 ease-in-out overflow-hidden",
                      isSelected
                        ? `h-[${contentHeight}px]`
                        : "h-0 "
                    )}
                  >
                    {answer?.custom_rich_text && (
                      <div className="[&>*]:pt-2 [&>p]:text-gray500 [&>*]:text-base [&>*]:font-medium [&>*]:leading-[137%] max-w-[672px] w-full">
                        <RichText block={answer} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
