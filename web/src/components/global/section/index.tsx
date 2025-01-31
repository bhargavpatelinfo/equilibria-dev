import React from "react";
import { SectionType } from "../../../../lib/sanity/types";
import HomeHeroSection from "@/components/homeHeroSection";
import LifeChangingResultsSection from "@/components/lifeChangingResultsSection";
import SliderSection from "@/components/sliderSection";

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


    default:
      return null;
  }
};

export default Section;
