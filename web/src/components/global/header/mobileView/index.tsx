import React, { useEffect, useState } from "react";
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

  const image = useSanityImage(logo);

  return (
    <div 
    className={`py-6  bg-background block lg:hidden fixed top-0 right-0 left-0 z-10  ${isScrolled ? "shadow-headerShadow" : ""}`
  }
    >
      <div className="container">
        <div className="flex justify-between items-center flex-1 relative">
          {image && (
            <Link to={routes.home()} className="">
              <Image
                src={image?.src}
                alt={image?.alt}
                height={image?.height}
                width={image?.width}
                priority
                className="w-[190px] em:w-[220px] h-auto"
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
          <div className={`w-full absolute left-0 right-0 top-[100%] overflow-hidden transition-all duration-500 ease-linear ${toggle ? "h-screen z-10" : "h-0 -z-10"}`}>
          <div
            className={`absolute z-10 top-0 left-0 right-0  transition-all duration-500  lg:hidden  ${toggle ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} bg-white  mt-6 p-8 rounded-3xl shadow-headerShadow`}
            style={{ pointerEvents: toggle ? "auto" : "none" }}
          >
            {navItems && (
              <div className="flex flex-col w-full gap-6">
                <MobileNavItem block={navItems} />
              </div>
            )}
          </div>
        </div>
        </div>


       
      </div>
    </div>
  );
};

export default MobileView;
