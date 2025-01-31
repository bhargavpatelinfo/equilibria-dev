import React from "react";
import { FooterType } from "../../../../lib/sanity/types";

export interface FooterProps {
  block: FooterType;
}
const Footer: React.FC<FooterProps> = ({ block }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative">
  
    </footer>
  );
};

export default Footer;
