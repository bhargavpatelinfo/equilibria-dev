import React from "react";
import { EquilibriaSuccessStoriesSectionType } from "../../../lib/sanity/types";
import RichText from "../global/richText";
import Image from "../global/image";
import Carousel from "../commons/carousel";

const EquilibriaSuccessStoriesSection: React.FC<
  EquilibriaSuccessStoriesSectionType
> = (block) => {
  const { id, equilibriaSuccessStories } = block || {};
  return (
    <section id={id} className="mb-[80px] lg:mb-[206px] overflow-hidden">
      <div className="container">
        <div className="max-w-[1297px] w-full mx-auto">
        <Carousel
          swiperWrapperClass=""
          swiperSlideClass=" transition-all duration-300 ease-linear rounded-lg"
          className='w-full max-w-[1320px] overflow-visible mx-auto px-4'
          data={equilibriaSuccessStories}
          hasNavigation
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 1,
            },
          }}
          renderSlide={(item, index) => {
            const { description, image, title, age, bio, name } = item || {};
            return (
              <div key={index} className="flex flex-col md:flex-row justify-between gap-10">
                <div className="max-w-[636px] w-full flex flex-col gap-4 sm:gap-6">
                  {title && <h2 className="text-[38px] sm:text-[40px] lg:text-[52px] font-semibold text-[#121212] tracking-[-2px] font-Kulim leading-[110%]">{title}</h2>}
                  {description?.custom_rich_text && (
                    <div className="[&>*]:text-[24px] sm:[&>*]:text-[30px] lg:[&>*]:text-[40px] [&>*]:text-[#121212] [&>*]:tracking-[-1px] md:[&>*]:tracking-[-2px] [&>*]:font-Kulim">
                      <RichText block={description} />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    {name && <h3 className="text-lg font-medium tracking-[-0.16px] text-[#121212]">{`${name} ${age ? `, ${age}` : ""}`}</h3>}
                    {bio && <span className="text-sm text-[#121212] tracking-[-0.16px]">{bio}</span>}
                  </div>
                </div>
                {image && (
                  <div className="max-w-full md:max-w-[553px] w-full">
                    <Image src={image} alt={image?.alt} className="aspect-[553/523] rounded-xl object-cover" />
                  </div>
                )}
              </div>
            )
          }}
        />
        </div>
      </div>
    </section>
  );
};

export default EquilibriaSuccessStoriesSection;
