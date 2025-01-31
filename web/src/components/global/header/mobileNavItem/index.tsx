import React from "react";
import Link from "../../link";
import { NavItemType } from "../../../../../lib/sanity/types";

const MobileNavItem = ({ block }: { block: NavItemType[] }) => {
  return block?.map((item, index) => {
    const { link, title } = item || {};
    return (
      <Link to={link} className="text-lg tracking-[-2%] hover:text-darkPink basic-transition w-fit" key={index}>
        {title}
      </Link>
    );
  });
};

export default MobileNavItem;
