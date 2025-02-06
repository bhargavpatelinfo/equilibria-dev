import React, { useEffect, useState } from "react";
import Image from "@/components/global/image";

import Link from "../../link";
import { routes } from "../../../../../lib/routes";
import { useSanityImage } from "../../../../../lib/sanity";
import { HeaderType } from "../../../../../lib/sanity/types";


export interface DeskTopViewProps {
  block: HeaderType;
  path: string;
  scrolled: number;
}
const DeskTopView: React.FC<DeskTopViewProps> = ({ block, path, scrolled }) => {
  const { logo, navItems } = block || {};
  const image = useSanityImage(logo);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
    className={`pt-8 pb-8 bg-background hidden lg:block fixed top-0 right-0 left-0 z-10 duration-300 ${
      isScrolled ? "border-b border-black/10" : ""
    }`}
    >
      <div className="container">
        <div className="flex flex-row justify-between items-center gap-5">
          {image && (
            <Link to={routes.home()} className="">
              <Image
                src={image?.src}
                alt={image?.alt}
                height={image?.height}
                width={image?.width}
                priority
                className="w-[220px] xl:w-[248px] h-auto"
              />
            </Link>
          )}
          <div className="">
            {navItems && (
              <div className="flex flex-row gap-6 xl:gap-8 items-center">
                {navItems?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        to={item?.link}
                        className="text-base tracking-[-0.32px] hover:text-darkPink basic-transition"
                      >
                        {item?.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DeskTopView;
