import React from "react";

import { HomeHeroSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";

const HomeHeroSection: React.FC<HomeHeroSectionType> = (block) => {
  const { id, title, description } = block || {};
  return (
    <section id={id} className="mb-[50px] sm:mb-[64px] lg:mb-[173px] mt-[140px] lg:mt-[200px] xl:mt-[250px]">
      <div className="container">
        <div className="max-w-[850px] w-full">
        {title?.custom_rich_text && (
          <div className="[&>*]:text-maroon [&>*]:text-[36px] em:[&>*]:text-[46px] sm:[&>*]:text-[50px] lg:[&>*]:text-[64px] [&>*]:font-Kulim [&>*]:font-semibold [&>*]:leading-[120%] [&>*]:tracking-[-2%]">
            <RichText block={title} />
          </div>
        )}
        {description?.custom_rich_text && (
          <div className="mt-6 em:mt-8 [&>*]:text-lg sm:[&>*]:text-xl [&>*]:tracking-[0.5%] [&>*]:text-maroon">
            <RichText block={description} />
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
