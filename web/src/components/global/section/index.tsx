import React from "react";
import { SectionType } from "../../../../lib/sanity/types";
import HomeHeroSection from "@/components/homeHeroSection";
import LifeChangingResultsSection from "@/components/lifeChangingResultsSection";
import SliderSection from "@/components/sliderSection";
import BestCareSection from "@/components/bestCareSection";
import StopManagingSection from "@/components/stopManagingSection";

interface SectionProps {
  data: SectionType;
}

const Section: React.FC<SectionProps> = ({ data }) => {
  switch (data._type) {
    case "homeHeroSection":
      return <HomeHeroSection {...data} />;
    case "lifeChangingResultsSection":
      return <LifeChangingResultsSection {...data} />;
    case "sliderSection":
      return <SliderSection {...data} />;
    case "bestCareSection":
      return <BestCareSection {...data} />;
    case "stopManagingSection":
      return <StopManagingSection {...data} />;


    default:
      return null;
  }
};

export default Section;
