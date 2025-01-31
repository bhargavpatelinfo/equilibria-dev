import React from "react";
import { BetterHealthSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import { useSanityImage } from "../../../lib/sanity";
import { generateFormattedIndex } from "../../../lib/utils/helperFunctions";
import Image from "../global/image";

const BetterHealthSection: React.FC<BetterHealthSectionType> = (block) => {
  const { id, title, titleDescriptionImages } = block || {};
  return (
    <section id={id} className="bg-[red] pt-[211px] pb-[228px]">
      {title?.custom_rich_text && (
        <div className="[&>p]:text-theme-slateGray [&>p]:text-62px [&>p]:font-semibold [&>p]:text-center [&>p]:leading-1.3">
          <RichText block={title} />
        </div>
      )}
      {titleDescriptionImages?.length > 0 && (
        <div className="grid grid-cols-1  items-center gap-12">
          {titleDescriptionImages?.map((item, index) => {
            const { description, image, title } = item || {};
            const bgImage = useSanityImage(image);
            const formattedIndex = generateFormattedIndex(index);
            return (
              <div key={index} className="flex flex-col space-y-6">
                <div className="text-left">
                  <div className="text-2xl font-bold text-theme-slateGray">
                    {`#${formattedIndex} ${title}`}
                  </div>
                  {description?.custom_rich_text && (
                    <div className="mt-4 text-lg text-theme-slateGray">
                      <RichText block={description} />
                    </div>
                  )}
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={image?.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default BetterHealthSection;
