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
    <footer className="bg-darkMaroon relative pt-[60px] lg:pt-[104px] pb-[60px]">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between gap-14 xl:gap-10">
          <div className="max-w-[464px] w-full">
          {logo && (
            <Link to={routes.home()} className="">
              <Image src={logo} alt={logo?.alt} priority className="max-w-[250px] em:max-w-[350px] 1xl:max-w-[464px] h-auto w-full" />
            </Link>
          )}
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5 max-w-[850px] w-full">
            <div className="max-w-[520px] w-full">
            {footerLinks?.length > 0 && (
              <ul className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-5">
                {footerLinks?.map((item, index) => {
                  const { labelLinks, title } = item || {};
                  return (
                    <li
                      key={index}
                      className="flex flex-col gap-6 sm:gap-8"
                    >
                      {title && (
                        <h4 className="text-base tracking-[-2%] font-medium text-white opacity-70">{title}</h4>
                      )}
                      {labelLinks?.length > 0 && (
                        <div className="flex flex-col gap-3">
                          {labelLinks?.map((item, index) => {
                            const { label, link } = item || {};
                            return (
                              <div
                                key={index}
                                className=""
                              >
                                <Link to={link || "#"} className="text-lg em:text-xl text-white tracking-[-2%] font-medium hover:opacity-70 basic-transition">{label}</Link>
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
            </div>
            {connectWithUs?.title && (
              <div className="flex flex-col gap-5 sm:gap-8">
                {connectWithUs?.title && (
                  <h4 className="text-base tracking-[-2%] font-medium text-white opacity-70">
                    {connectWithUs?.title}
                  </h4>
                )}
                {connectWithUs?.titleLabelLinks?.length > 0 && (
                  <div className="flex flex-col gap-3 ">
                    {connectWithUs?.titleLabelLinks?.map((item, index) => {
                      const { labelLink, title } = item || {};
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-3"
                        >
                          {title && <div className="text-xl text-white tracking-[-2%] font-medium">{title}</div>}
                          <Link to={labelLink?.link || "#"} className="text-lg em:text-xl text-white tracking-[-2%] font-medium hover:opacity-70 basic-transition underline underline-offset-4 decoration-darkPink">{labelLink?.label}</Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-20 md:mt-[156px] gap-5 em:gap-8">
          {bottomDescription && (
            <p className="text-base em:text-xl tracking-[-2%] text-white text-center lg:text-left">
              {`© ${currentYear} ${bottomDescription}`}
            </p>
          )}
          <div className="flex flex-col gap-8">
          {legalLinks?.length > 0 && (
            <div className="flex flex-row flex-wrap items-center justify-center  gap-3">
              {legalLinks?.map((item, index) => {
                const { label, link } = item || {};
                const isLast = index === legalLinks.length - 1;
                return (
                  <div
                    key={index}
                    className="text-white text-base em:text-xl tracking-[-2%] flex flex-row  gap-3 items-center"
                  >
                    <Link to={link || "#"} className="hover:opacity-70 basic-transition">
                      {label}
                    </Link>
                    <div className="hidden em:block">
                    {!isLast && " - "}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex justify-center lg:justify-end items-center">
             <span className="text-base text-white tracking-[-0.32px] font-normal">
              {`Build With`}
             </span>
             <span className="text-[#FF0073] font-bold uppercase tracking-[-0.32px] px-1.5 text-base">
              {`JAMSTACKY`}
             </span>
             <span>
              {`♥️`}
             </span>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
