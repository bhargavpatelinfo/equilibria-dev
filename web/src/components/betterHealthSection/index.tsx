import React from "react";
import { BetterHealthSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import { generateFormattedIndex } from "../../../lib/utils/helperFunctions";
import Image from "../global/image";
import Carousel from "../commons/carousel";

const BetterHealthSection: React.FC<BetterHealthSectionType> = (block) => {
  const { id, title, titleDescriptionImages } = block || {};
  return (
    <section id={id} className="mb-[100px] lg:mb-[206px] overflow-hidden">
      <div className="container">
        {title?.custom_rich_text && (
          <div className="max-w-[715px] w-full mx-auto [&>*]:text-36 em:[&>*]:text-46 sm:[&>*]:text-50 lg:[&>*]:text-64 [&>*]:text-darkPurple [&>*]:text-center [&>*]:tracking-[-1.28px] [&>*]:font-semibold [&>*]:font-Kulim [&>*]:leading-[110%] ">
            <RichText block={title} />
          </div>
        )}

        <Carousel
          swiperWrapperClass="!overflow-visible"
          swiperSlideClass="transition-all duration-300 ease-linear rounded-lg"
          className='  mx-auto mt-8 sm:mt-16 lg:mt-[88px]'
          data={titleDescriptionImages}
          spaceBetween={24}
          slidesPerView={1}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 1.1,
            },
          }}
          renderSlide={(item, index) => {
            const { description, image, title } = item || {};
            const formattedIndex = generateFormattedIndex(index);
            return (
              <div key={index} className="relative">
                <Image
                  src={image}
                  alt={image?.alt}
                  className="aspect-[1318/790] object-cover rounded-xl sm:rounded-xxl"
                />
                <div className="absolute top-0 w-full h-full bg-black/20 rounded-xl sm:rounded-xxl"></div>
                <div className="flex flex-col gap-4 absolute top-5 sm:top-10 xl:top-[64px] left-5 sm:left-10 xl:left-[64px] max-w-[300px] sm:max-w-[464px] w-[80%] sm:w-full z-[5]">
                  <h3 className="text-22 esm:text-26 sm:text-40 lg:text-50 xl:text-64 text-white tracking-[-1.28px] font-semibold font-Kulim leading-[110%] ">
                    {`#${formattedIndex} ${title}`}
                  </h3>
                  {description?.custom_rich_text && (
                    <div className="[&>*]:text-white [&>*]:text-base sm:[&>*]:text-xl [&>*]:tracking-[-0.1px]">
                      <RichText block={description} />
                    </div>
                  )}
                </div>
              </div>
            )
          }}
        />
      </div>
    </section>
  );
};

export default BetterHealthSection;
