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
    <header>
      <div className="">
        <div className="">
          {image && (
            <Link to={routes.home()} className="">
              <Image
                src={image?.src}
                alt={image?.alt}
                height={image?.height}
                width={image?.width}
                priority
                className=""
              />
            </Link>
          )}
          <div className="">
            {navItems && (
              <div className="">
                {navItems?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        to={item?.link}
                        className=""
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
