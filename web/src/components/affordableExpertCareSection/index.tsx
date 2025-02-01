import React from "react";
import { AffordableExpertCareSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Image from "../global/image";
import Button from "../global/button";

const AffordableExpertCareSection: React.FC<AffordableExpertCareSectionType> = (
  block
) => {
  const { id, title, imageTitleDescriptionCtas, description } = block || {};
  return (
    <section id={id} className="py-14 sm:py-[88px] bg-pink mb-[100px] lg:mb-[206px]">
      <div className="container">
        <div className="flex flex-col gap-4">
          {title?.custom_rich_text && (
            <div className="[&>*]:text-[36px] em:[&>*]:text-[46px] sm:[&>*]:text-[50px] lg:[&>*]:text-[64px] [&>*]:text-darkPurple [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%]">
              <RichText block={title} />
            </div>
          )}
          {description?.custom_rich_text && (
            <div className="[&>*]:text-lg em:[&>*]:text-xl [&>*]:font-medium [&>*]:tracking-[-0.1px] [&>*]:text-darkPurple">
              <RichText block={description} />
            </div>
          )}
        </div>
        <div className="mt-10 em:mt-16 lg:mt-[88px]">
          {imageTitleDescriptionCtas?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageTitleDescriptionCtas?.map((item, index) => {
                const { cta, description, image, title } = item || {};
                return (
                  <div key={index} className="flex flex-col gap-6 justify-normal">
                    {image && (
                      <div className="">
                        <Image src={image} alt={image?.alt} className="aspect-[464/534] rounded-[32px] object-cover"/>
                      </div>
                    )}
                    <div className="flex flex-col gap-4">
                      {title && <h3 className="text-[32px] lg:text-[40px] font-semibold tracking-[-0.8px] font-Kulim text-darkPurple leading-[110%]">{title}</h3>}
                      {description?.custom_rich_text && (
                        <div className="[&>p]:text-lg em:[&>p]:text-xl [&>p]:text-darkPurple [&>p]:tracking-[-0.1px] [&>p]:font-semibold [&>p]:opacity-70 [&>p>span]:text-[26px] em:[&>p>span]:text-[32px] lg:[&>p>span]:text-[44px] [&>p>span]:pb-4 [&>p>span]:leading-[100%] [&>p>span]:block [&>p>span]:tracking-[-0.22px]">
                          <RichText block={description} />
                        </div>
                      )}
                      </div>

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
        </div>
      </div>
    </section>
  );
};

export default AffordableExpertCareSection;
