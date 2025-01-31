import React from "react";
import { FooterType } from "../../../../lib/sanity/types";
import { routes } from "../../../../lib/routes";
import Image from "../image";
import Link from "../link";

export interface FooterProps {
  block: FooterType;
}
const Footer: React.FC<FooterProps> = ({ block }) => {
  const currentYear = new Date().getFullYear();
  const { logo, bottomDescription, connectWithUs, footerLinks, legalLinks } =
    block || {};
  return (
    <footer className="bg-black relative">
      {logo && (
        <Link to={routes.home()} className="">
          <Image src={logo} alt={logo?.alt} priority className="" />
        </Link>
      )}
      {bottomDescription && (
        <p className="text-base font-norma text-left  text-white">
          {`© ${currentYear} ${bottomDescription}`}
        </p>
      )}
      {footerLinks?.length > 0 && (
        <ul className="grid grid-cols-1 em:grid-cols-2 md:grid-cols-2 gap-8 em:gap-12 sm:gap-18 lg:gap-20 place-content-between xl:flex xl:gap-13 2xl:gap-16">
          {footerLinks?.map((item, index) => {
            const { labelLinks, title } = item || {};
            return (
              <li
                key={index}
                className="flex items-start  flex-col gap-4 md:gap-8"
              >
                {title && (
                  <h4 className="text-base text-white font-bold">{title}</h4>
                )}
                {labelLinks?.length > 0 && (
                  <div className="flex flex-col items-start  gap-2 md:gap-3">
                    {labelLinks?.map((item, index) => {
                      const { label, link } = item || {};
                      return (
                        <div
                          key={index}
                          className="[&>a]:text-base hover:[&>a]:opacity-70 [&>a]:1xl:text-xl [&>a]:font-extralight [&>a]:text-white [&>a]:cursor-pointer"
                        >
                          <Link to={link || "#"}>{label}</Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {connectWithUs?.title && (
        <div>
          {connectWithUs?.title && (
            <h4 className="text-base text-white font-bold">
              {connectWithUs?.title}
            </h4>
          )}
          {connectWithUs?.titleLabelLinks?.length > 0 && (
            <div className="flex flex-col items-start  gap-2 md:gap-3">
              {connectWithUs?.titleLabelLinks?.map((item, index) => {
                const { labelLink, title } = item || {};
                return (
                  <div
                    key={index}
                    className="[&>a]:text-base hover:[&>a]:opacity-70 [&>a]:1xl:text-xl [&>a]:font-extralight [&>a]:text-white [&>a]:cursor-pointer"
                  >
                    {title && <div>{title}</div>}
                    <Link to={labelLink?.link || "#"}>{labelLink?.label}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      {legalLinks?.length > 0 && (
        <div className="flex flex-col items-start  gap-2 md:gap-3">
          {legalLinks?.map((item, index) => {
            const { label, link } = item || {};
            return (
              <div
                key={index}
                className="[&>a]:text-base hover:[&>a]:opacity-70 [&>a]:1xl:text-xl [&>a]:font-extralight [&>a]:text-white [&>a]:cursor-pointer"
              >
                <Link to={link || "#"}>{label}</Link>
              </div>
            );
          })}
        </div>
      )}
    </footer>
  );
};

export default Footer;
