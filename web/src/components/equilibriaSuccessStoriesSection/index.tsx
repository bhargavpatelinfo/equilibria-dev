import React from "react";
import { EquilibriaSuccessStoriesSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Image from "../global/image";

const EquilibriaSuccessStoriesSection: React.FC<
  EquilibriaSuccessStoriesSectionType
> = (block) => {
  const { id, equilibriaSuccessStories } = block || {};
  return (
    <section id={id} className="bg-[teal] pt-[211px] pb-[228px]">
      {equilibriaSuccessStories?.length > 0 && (
        <div>
          {equilibriaSuccessStories?.map((item, index) => {
            const { description, image, title, age, bio, name } = item || {};
            return (
              <div key={index}>
                {title && <div>{title}</div>}
                {description?.custom_rich_text && (
                  <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
                    <RichText block={description} />
                  </div>
                )}
                {name && <div>{`${name} ${age ? `, ${age}` : ""}`}</div>}
                {bio && <div>{bio}</div>}
                {image && (
                  <div className="bg-[teal]">
                    <Image src={image} alt={image?.alt} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default EquilibriaSuccessStoriesSection;
