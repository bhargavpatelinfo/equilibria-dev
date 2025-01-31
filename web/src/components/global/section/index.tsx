import React from "react";
import { SectionType } from "../../../../lib/sanity/types";
import HomeHeroSection from "@/components/homeHeroSection";

interface SectionProps {
  data: SectionType;
}

const Section: React.FC<SectionProps> = ({ data }) => {
  switch (data._type) {
    case "homeHeroSection":
      return <HomeHeroSection {...data} />;


    default:
      return null;
  }
};

export default Section;
