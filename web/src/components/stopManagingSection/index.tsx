import React from "react";
import { StopManagingSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Image from "../global/image";

const StopManagingSection: React.FC<StopManagingSectionType> = (block) => {
  const { id, title, description, titleDescriptionImages } = block || {};
  return (
    <section id={id} className="mb-[100px] lg:mb-[206px]">
      <div className="container">
        <div className="flex flex-col gap-4 max-w-[956px] w-full">
          {title?.custom_rich_text && (
            <div className="[&>*]:text-[36px] em:[&>*]:text-[46px] lg:[&>*]:text-[64px] [&>*]:text-darkPurple [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%]">
              <RichText block={title} />
            </div>
          )}
          {description?.custom_rich_text && (
            <div className="[&>*]:text-lg sm:[&>*]:text-xl [&>*]:text-maroon [&>*]:font-medium [&>*]:tracking-[-0.1px] [&>*]:opacity-70 [&>*]:leading-[150%]">
              <RichText block={description} />
            </div>
          )}
        </div>
        <div className="mt-[50px] lg:mt-[88px]">
          {titleDescriptionImages?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {titleDescriptionImages?.map((item, index) => {
                const { description, image, title } = item || {};
                return (
                  <div key={index} className="flex flex-col gap-6">
                    {image && (
                      <div className="">
                        <Image src={image} alt={image?.alt} className="aspect-[2/3] rounded-[32px]"/>
                      </div>
                    )}
                    <div className="flex flex-col gap-4">
                      {title && (
                        <h3 className="text-[32px] lg:text-[40px] font-semibold tracking-[-0.8px] font-Kulim text-darkPurple leading-[110%]">
                          {title}
                        </h3>
                      )}
                      {description?.custom_rich_text && (
                        <div className="[&>*]:text-lg lg:[&>*]:text-xl [&>*]:text-darkPurple [&>*]:tracking-[-0.1px] [&>*]:opacity-70">
                          <RichText block={description} />
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StopManagingSection;
