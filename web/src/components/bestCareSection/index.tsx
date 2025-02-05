import React from "react";
import { BestCareSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Image from "../global/image";
import Button from "../global/button";
import dynamic from "next/dynamic";
const Masonry = dynamic(() => import('react-layout-masonry'), { ssr: false });

const BestCareSection: React.FC<BestCareSectionType> = (block) => {
  const { id, title, imageTitleDescriptionCtas } = block || {};
  return (
    <section id={id} className="my-20 sm:my-[100px] lg:my-[150px] xl:my-[206px]">
      <div className="container">
        {title?.custom_rich_text && (
          <div className="max-w-[507px] w-full mx-auto [&>*]:text-36 em:[&>*]:text-46 lg:[&>*]:text-64 [&>*]:text-darkPurple [&>*]:text-center [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] ">
            <RichText block={title} />
          </div>
        )}
        {imageTitleDescriptionCtas?.length > 0 && (
          <Masonry
          columns={{ 320: 1, 767: 2 }}
          gap={32}
          columnProps={{
            className: 'mt-8 sm:mt-16 lg:mt-[96px]',
          }}
          >
            {imageTitleDescriptionCtas?.map((item, index) => {
              const { cta, description, image, title } = item || {};
              return (
                <div key={index} className="pt-10 md:pt-[72px] px-8 sm:px-10 lg:px-[80px] xl:px-[100px] bg-pink rounded-xxl flex flex-col justify-center items-center gap-10 sm:gap-[93px]">
                  <div>
                    {title && <h3 className="text-32 em:text-42 lg:text-64 text-darkPurple font-bold tracking-[-1.28px] text-center leading-[110%] font-Kulim">{title}</h3>}
                    {description?.custom_rich_text && (
                      <div className="mt-4 [&>*]:text-lg sm:[&>*]:text-xl lg:[&>*]:text-2xl [&>*]:text-darkRed [&>*]:tracking-[-0.48px] [&>*]:font-Kulim [&>*]:text-center [&>*]:opacity-70">
                        <RichText block={description} />
                      </div>
                    )}

                    {cta?.label && (
                      <div className="flex justify-center items-center mt-6 md:mt-10">
                        <Button block={cta} />
                      </div>
                    )}
                  </div>
                  {image && (
                    <div className="flex justify-center items-center">
                      <Image src={image} alt={image?.alt} className="w-auto h-auto mx-auto"/>
                    </div>
                  )}
                </div>
              );
            })}
          </Masonry>
        )}
      </div>
    </section>
  );
};

export default BestCareSection;
