import React from "react";

import { HomeHeroSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import TextTransition, { presets } from 'react-text-transition';


const HomeHeroSection: React.FC<HomeHeroSectionType> = (block) => {
  const { id, description, suffix, prefix, rotatingSubtitles } = block || {};
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id={id} className="mb-[50px] sm:mb-[64px] lg:mb-[173px] mt-[120px] em:mt-[140px] lg:mt-[200px] xl:mt-[230px]">
      <div className="container">
        <div className="">
          <div>
            <h1 className="[&>*]:text-maroon [&>*]:text-36 em:[&>*]:text-46 sm:[&>*]:text-50 lg:[&>*]:text-64 [&>*]:font-Kulim [&>*]:font-semibold [&>*]:leading-[120%] [&>*]:tracking-[-1.28px]">
              <div className="flex flex-col sm:flex-row sm:items-center  gap-1 sm:gap-6 overflow-hidden">
                {prefix &&
                  <div>
                    {prefix}
                  </div>
                }
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
              {suffix &&
                <div className="max-w-[850px] w-full">
                  {suffix}
                </div>
              }
            </h1>
          </div>
          {description?.custom_rich_text && (
            <div className="max-w-[850px] w-full mt-6 em:mt-8 [&>*]:text-lg sm:[&>*]:text-xl [&>*]:tracking-[0.5%] [&>*]:text-maroon">
              <RichText block={description} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
