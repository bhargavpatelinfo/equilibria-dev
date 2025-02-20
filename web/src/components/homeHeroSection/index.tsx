import React from "react";

import { HomeHeroSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import TextTransition, { presets } from "react-text-transition";
import Image from "../global/image";

const HomeHeroSection: React.FC<HomeHeroSectionType> = (block) => {
  const { id, description, suffix, prefix, rotatingSubtitles, image } =
    block || {};
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id={id} className="mt-[60px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
          <div className="py-6 w-full lg:max-w-[820px]">
            <div className="">
              <h1 className="[&>*]:text-maroon [&>*]:text-36 em:[&>*]:text-46 sm:[&>*]:text-50 xl:[&>*]:text-64 [&>*]:font-Kulim [&>*]:font-semibold [&>*]:leading-[120%] [&>*]:tracking-[-1.28px]">
                <div className="flex flex-col sm:flex-row sm:items-center  gap-1 sm:gap-6 overflow-hidden">
                  {prefix && <div>{prefix}</div>}
                  {rotatingSubtitles?.length > 0 && (
                    <div>
                      <TextTransition
                        springConfig={presets.wobbly}
                        className=" text-darkPink  !h-auto font-semibold !lowercase"
                      >
                        {rotatingSubtitles?.[index % rotatingSubtitles?.length]}
                      </TextTransition>
                    </div>
                  )}
                </div>
                {suffix && <div className="max-w-[850px] w-full">{suffix}</div>}
              </h1>
            </div>
            {description?.custom_rich_text && (
              <div className=" lg:max-w-[850px] w-full mt-6 em:mt-8 [&>*]:text-lg sm:[&>*]:text-xl [&>*]:tracking-[0.5%] [&>*]:text-maroon">
                <RichText block={description} />
              </div>
            )}
          </div>
          {image && (
            <div className="w-full max-w-full md:max-w-[537px] aspect-[537/671]">
              <Image
                alt={image?.alt}
                src={image}
                className="w-full  h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
