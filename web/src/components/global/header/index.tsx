import React from "react";

import DeskTopView from "./deskTopView";
import MobileView from "./mobileView";
import { HeaderType } from "../../../../lib/sanity/types";
import { useModals } from "@/components/commons/modalsProvider";

export interface HeaderProps {
  block: HeaderType;
  path: string;
}

const Header: React.FC<HeaderProps> = ({ block, path }) => {
  const [toggle, setToggle] = React.useState(false);
  const { scrolled, setScrolled } = useModals();

  React.useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [toggle]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window?.scrollY;
      setScrolled(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolled]);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div id="header">
      <DeskTopView block={block} path={path} scrolled={scrolled} />
      <MobileView
        block={block}
        handleToggle={handleToggle}
        toggle={toggle}
        scrolled={scrolled}
      />
    </div>
  );
};

export default Header;
