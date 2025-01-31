import React from "react";
import clsx from "clsx";
import MobileToggleCloseIcon from "@/components/commons/icons/mobileToggleCloseIcon";
import MobileToggle from "@/components/commons/icons/mobileToggle";
import Image from "@/components/global/image";

import MobileNavItem from "../mobileNavItem";
import Link from "../../link";
import { useSanityImage } from "../../../../../lib/sanity";
import { routes } from "../../../../../lib/routes";
import { HeaderType } from "../../../../../lib/sanity/types";

export interface MobileViewProps {
  block: HeaderType;
  handleToggle: () => void;
  toggle: boolean;
  scrolled: number;
}
const MobileView: React.FC<MobileViewProps> = ({
  block,
  handleToggle,
  toggle,
  scrolled,
}) => {
  const { logo, navItems } = block || {};

  const image = useSanityImage(logo);

  return (
    <div className="bg-[teal]">
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
      <div onClick={handleToggle} className={clsx(toggle ? "" : "")}>
        {toggle ? (
          <MobileToggleCloseIcon className="w-[28px] h-[28px] cursor-pointer" />
        ) : (
          <MobileToggle className="cursor-pointer" />
        )}
      </div>

      {toggle && (
        <div className="">
          {navItems && (
            <div className="">
              <MobileNavItem block={navItems} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileView;
