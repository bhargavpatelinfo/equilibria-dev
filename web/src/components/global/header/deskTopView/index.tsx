import React from "react";
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

  return (
    <header className="py-[57px] bg-background hidden lg:block">
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
                className="w-[220px] xl:w-[248px] h-auto xl:h-[36px]"
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
                        className="text-base tracking-[-2%] hover:text-darkPink basic-transition"
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
