import React from "react";
import Link from "../../link";
import { NavItemType } from "../../../../../lib/sanity/types";

const MobileNavItem = ({ block,handleToggle }: { block: NavItemType[],handleToggle: () => void; }) => {
  return block?.map((item, index) => {
    const { link, title } = item || {};
    return (
      <Link to={link} className="text-lg tracking-[-2%] hover:text-darkPink basic-transition w-fit" key={index} onClick={handleToggle}>
        {title}
      </Link>
    );
  });
};

export default MobileNavItem;
