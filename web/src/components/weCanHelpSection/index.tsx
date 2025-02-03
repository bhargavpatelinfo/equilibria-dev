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
    <section id={id} className="mb-[100px] lg:mb-[206px]">
      <div
        className={cn(
          "container"
        )}
      >
        
        <div className="rounded-3xl py-16 em:py-24 lg:py-[177px] px-8"
         style={{
          backgroundImage: bgImage?.src ? `url(${bgImage?.src})` : undefined,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "linear-gradient(180deg, #5D5BD4 0%, #8C75E6 100%)",
        }}
        >
          <div className="max-w-[956px] mx-auto w-full flex flex-col gap-4">
            {title?.custom_rich_text && (
              <div className="[&>*]:text-[36px] em:[&>*]:text-[46px] lg:[&>*]:text-[64px] [&>*]:text-darkPurple [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] [&>*]:text-center">
                <RichText block={title} />
              </div>
            )}
            {description?.custom_rich_text && (
              <div className="[&>*]:text-lg em:[&>*]:text-xl [&>*]:font-medium [&>*]:tracking-[-0.1px] [&>*]:text-maroon [&>*]:text-center [&>*]:opacity-70">
                <RichText block={description} />
              </div>
            )}
          </div>
          {button?.label && (
            <div className="w-fit  mx-auto mt-10 em:mt-14">
              <Button
                block={button}
                className=""
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeCanHelpSection;
