import React from "react";

import { HomeHeroSectionType } from "../../../lib/sanity/types";

const HomeHeroSection: React.FC<HomeHeroSectionType> = (block) => {
  const { id, title, description } = block || {};
  return (
    <section id={id} className="bg-theme-lightGray pt-[211px] pb-[228px]">
      {/* {title?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={title} />
        </div>
      )}
      {description?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-base [&>p]:font-normal [&>p]:text-center">
          <RichText block={description} />
        </div>
      )} */}
    </section>
  );
};

export default HomeHeroSection;
