import React from "react";
import { StopManagingSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Image from "../global/image";

const StopManagingSection: React.FC<StopManagingSectionType> = (block) => {
  const { id, title, description, titleDescriptionImages } = block || {};
  return (
    <section id={id} className="bg-[red] pt-[211px] pb-[228px]">
      {title?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={title} />
        </div>
      )}
      {description?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={description} />
        </div>
      )}
      {titleDescriptionImages?.length > 0 && (
        <div>
          {titleDescriptionImages?.map((item, index) => {
            const { description, image, title } = item || {};
            return (
              <div key={index}>
                {title && (
                  <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
                    {title}
                  </div>
                )}
                {description?.custom_rich_text && (
                  <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
                    <RichText block={description} />
                  </div>
                )}
                {image && (
                  <div>
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

export default StopManagingSection;
