import React from "react";
import { SectionType } from "../../../../lib/sanity/types";
import HomeHeroSection from "@/components/homeHeroSection";
import LifeChangingResultsSection from "@/components/lifeChangingResultsSection";
import SliderSection from "@/components/sliderSection";
import BestCareSection from "@/components/bestCareSection";
import StopManagingSection from "@/components/stopManagingSection";
import WeCanHelpSection from "@/components/weCanHelpSection";
import BetterHealthSection from "@/components/betterHealthSection";
import EquilibriaSuccessStoriesSection from "@/components/equilibriaSuccessStoriesSection";
import AffordableExpertCareSection from "@/components/affordableExpertCareSection";
import LeadersSection from "@/components/leadersSection";
import HeroSection from "@/components/heroSection";
import IntegratedCareSection from "@/components/integratedCareSection";
import SimpleStepsSection from "@/components/simpleStepsSection";
import YourSuccessSection from "@/components/yourSuccessSection";
import FaqSection from "@/components/faqSection";
import TransformationSection from "@/components/transformationSection";
import SymptomSolutionsSection from "@/components/symptomSolutionsSection";

interface SectionProps {
  data: SectionType;
}

const Section: React.FC<SectionProps> = ({ data }) => {
  switch (data._type) {
    case "homeHeroSection":
      return <HomeHeroSection {...data} />;
    case "heroSection":
      return <HeroSection {...data} />;
    case "lifeChangingResultsSection":
      return <LifeChangingResultsSection {...data} />;
    case "sliderSection":
      return <SliderSection {...data} />;
    case "bestCareSection":
      return <BestCareSection {...data} />;
    case "stopManagingSection":
      return <StopManagingSection {...data} />;
    case "weCanHelpSection":
      return <WeCanHelpSection {...data} />;
    case "betterHealthSection":
      return <BetterHealthSection {...data} />;
    case "equilibriaSuccessStoriesSection":
      return <EquilibriaSuccessStoriesSection {...data} />;
    case "affordableExpertCareSection":
      return <AffordableExpertCareSection {...data} />;
    case "leadersSection":
      return <LeadersSection {...data} />;
    case "integratedCareSection":
      return <IntegratedCareSection {...data} />;
    case "simpleStepsSection":
      return <SimpleStepsSection {...data} />;
    case "yourSuccessSection":
      return <YourSuccessSection {...data} />;
    case "faqSection":
      return <FaqSection {...data} />;
    case "transformationSection":
      return <TransformationSection {...data} />;
    case "symptomSolutionsSection":
      return <SymptomSolutionsSection {...data} />;

    default:
      return null;
  }
};

export default Section;
