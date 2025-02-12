import React, { useEffect, useRef, useState } from "react";
import { FaqSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import { cn } from "../../../lib/utils/helperFunctions";

export const PlusCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="plus-circle">
        <path
          id="Icon"
          d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="#071A34"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const MinusCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="minus-circle">
        <path
          id="Icon"
          d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="#071A34"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const FaqSection: React.FC<FaqSectionType> = (block) => {
  const { title, questionAndAnswers } = block || {};

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    <section className="my-[60px] lg:my-[72px]">
      {title?.custom_rich_text && (
        <div className="[&>*]:py-2 [&>p]:text-[#667085] text-base font-medium">
          <RichText block={title} />
        </div>
      )}
      <div className="flex flex-col gap-5">
        {questionAndAnswers.map((item, index) => {
          const { question, answer } = item || {};
          const isSelected = index === activeIndex;
          return (
            <div className="p-6 border-b border-b-[#DDDDDD]" key={index}>
              <div
                className="flex items-center justify-between gap-[10px] cursor-pointer"
                onClick={() => handleClick(index)}
              >
                {question && (
                  <h3 className="text-xl text-theme-charcolBlue font-medium font-dm">
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
                    ? `h-[${contentHeight}px] opacity-100`
                    : "h-0 opacity-0"
                )}
              >
                {answer?.custom_rich_text && (
                  <div className="[&>*]:py-2 [&>p]:text-[#667085] text-base font-medium">
                    <RichText block={answer} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
