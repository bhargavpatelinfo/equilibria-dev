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
    <section id={id} className="py-[88px] bg-pink mb-[100px] lg:mb-[206px]">
      <div className="container">
        <div className="flex flex-col gap-4">
          {title?.custom_rich_text && (
            <div className="[&>*]:text-[36px] em:[&>*]:text-[46px] sm:[&>*]:text-[50px] lg:[&>*]:text-[64px] [&>*]:text-darkPurple [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] [&>*]:text-center">
              <RichText block={title} />
            </div>
          )}
          {description?.custom_rich_text && (
            <div className="">
              <RichText block={description} />
            </div>
          )}
        </div>
        {imageTitleDescriptionCtas?.length > 0 && (
          <div>
            {imageTitleDescriptionCtas?.map((item, index) => {
              const { cta, description, image, title } = item || {};
              return (
                <div key={index}>
                  {title && <div>{title}</div>}
                  {description?.custom_rich_text && (
                    <div className="">
                      <RichText block={description} />
                    </div>
                  )}
                  {image && (
                    <div className="">
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
      </div>
    </section>
  );
};

export default AffordableExpertCareSection;
