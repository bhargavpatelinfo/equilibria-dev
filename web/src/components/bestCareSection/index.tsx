import React from "react";
import { BestCareSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Image from "../global/image";
import Button from "../global/button";

const BestCareSection: React.FC<BestCareSectionType> = (block) => {
  const { id, title, imageTitleDescriptionCtas } = block || {};
  return (
    <section id={id} className="bg-[teal] pt-[211px] pb-[228px]">
      {title?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={title} />
        </div>
      )}
      {imageTitleDescriptionCtas?.length > 0 && (
        <div>
          {imageTitleDescriptionCtas?.map((item, index) => {
            const { cta, description, image, title } = item || {};
            return (
              <div key={index}>
                {title && <div>{title}</div>}
                {description?.custom_rich_text && (
                  <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
                    <RichText block={description} />
                  </div>
                )}
                {image && (
                  <div className="bg-[teal]">
                    <Image src={image} alt={image?.alt} />
                  </div>
                )}
                {cta?.label && (
                  <div>
                    <Button block={cta} />
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

export default BestCareSection;
