import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperProps, SwiperClass, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { cn } from "../../../../lib/utils/helperFunctions";

const PreviousArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M10.0665 17.8666L11.183 16.7373L7.19976 12.7541H19.833V11.1706H7.19976L11.1998 7.17056L10.083 6.0498L4.16651 11.9666L10.0665 17.8666Z" fill="#FFF" />
    </svg>
  );
}
const NextArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13.9335 17.8666L12.817 16.7373L16.8002 12.7541H4.16699V11.1706H16.8002L12.8002 7.17056L13.917 6.0498L19.8335 11.9666L13.9335 17.8666Z" fill="#FFF" />
    </svg>
  );
}



interface BaseCarouselProps<T> extends SwiperProps {
  swiperWrapperClass?: string;
  wrapperClass?: string;
  swiperSlideClass?: string;
  data: T[];
  hasNavigation?: boolean;
  renderSlide: (item: T, index: number) => React.ReactNode;
}

const Carousel = <T,>({
  hasNavigation = false,
  swiperWrapperClass,
  wrapperClass,
  className,
  data,
  renderSlide,
  swiperSlideClass,
  ...rest
}: BaseCarouselProps<T>) => {

  const swiperRef = useRef<SwiperRef | null>(null);

  const handlePrev = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };


  return (
    <React.Fragment>

      <div className={className}>
        <div className={cn("", wrapperClass)}>
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            className={cn("", swiperWrapperClass)}
            {...rest}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className={cn("", swiperSlideClass)}>
                {renderSlide(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {hasNavigation && (
          <div className="mt-[56px] flex flex-row justify-center items-center gap-4">
            
              <button
                className="bg-darkPink p-3 sm:p-[18px] rounded-full "
                onClick={handlePrev}
                aria-label="Previous Slide"
              >
                <PreviousArrow />
              </button>
              <button
                className="bg-darkPink p-3 sm:p-[18px] rounded-full "
                onClick={handleNext}
                aria-label="Next Slide"
              >
                <NextArrow />
              </button>
            
          </div>
        )}
      </div>

    </React.Fragment>
  );
};

export default Carousel;