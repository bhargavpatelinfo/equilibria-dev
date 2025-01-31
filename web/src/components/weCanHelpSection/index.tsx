import React from "react";
import { WeCanHelpSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import { useSanityImage } from "../../../lib/sanity";
import Button from "../global/button";
import { cn } from "../../../lib/utils/helperFunctions";

const WeCanHelpSection: React.FC<WeCanHelpSectionType> = (block) => {
  const { id, title, description, backgroundImage, button } = block || {};
  const bgImage = useSanityImage(backgroundImage);
  return (
    <section id={id} className="overflow-hidden">
      <div
        className={cn(
          "relative py-[50px] md:py-[75px]  rounded-3xl  max-w-7xl mx-auto px-5 "
        )}
        style={{
          backgroundImage: bgImage?.src ? `url(${bgImage?.src})` : undefined,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "linear-gradient(180deg, #5D5BD4 0%, #8C75E6 100%)",
        }}
      >
        <div className="cardBorder  overflow-hidden rounded-3xl " />
        <div className="rounded-3xl ">
          <div className="max-w-[220px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[881px] flex flex-col gap-5 sm:gap-8 justify-center items-center mx-auto w-full">
            {title?.custom_rich_text && (
              <div className="[&>*]:my-0 [&>*]:text-3xl em:[&>*]:text-4xl md:[&>*]:text-5xl [&>*]:text-white [&>*]:tracking-[-0.72px] [&>*]:sm:tracking-[-0.96px] [&>*]:text-center [&>*]:font-semibold [&>*]:pr-0 [&>*]:font-Avenir [&>*]:!leading-[110%]  ">
                <RichText block={title} />
              </div>
            )}
            {description?.custom_rich_text && (
              <div className="[&>*]:my-0 [&>*]:text-center [&>*]:text-white [&>*]:leading-[140%] [&>*]:text-base ">
                <RichText block={description} />
              </div>
            )}
          </div>
          {button?.label && (
            <div className="w-fit  mx-auto mt-8">
              <Button
                block={button}
                className="hover:!shadow-2xl text-center font-Avenir"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeCanHelpSection;
