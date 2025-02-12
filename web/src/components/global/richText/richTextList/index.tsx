import { PortableTextListComponent, PortableTextMarkComponent } from "@portabletext/react";
import React from "react";


{/* Common */ }

export const BulletList: PortableTextListComponent = ({ children }) => {
  return (
    <div className="">
      <ul className="flex flex-col gap-2 list-disc pl-6 [&>li]:font-normal [&>li]:text-lg lg:[&>li]:text-xl [&>li]:text-darkPurple">{children}</ul>
    </div>
  );
};

export const NumberList: PortableTextListComponent = ({ children }) => {
  return (
    <div className="mt-2">
      <ol className="flex flex-col gap-2 [&>li]:text-lg lg:[&>li]:text-xl list-decimal list-inside">{children}</ol>
    </div>
  );
};

export const RichTextItalic: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <em aria-label={text} className="text-[15px] em:text-[16px] leading-[176%] mb-[30px] italic">
      {children}
    </em>
  );
};

export const RichTextBold: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <strong aria-label={text} className="text-[15px] em:text-[16px]  leading-[176%] mb-[30px] font-bold">
      {children}
    </strong>
  );
};

export const RichTextCode: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <code aria-label={text} className="text-[15px] em:text-[16px] text-black leading-[176%] mb-[30px]">
      {children}
    </code>
  );
};

export const RichTextStrikeThrough: PortableTextMarkComponent = ({ children, text }) => {
  return (
    <del aria-label={text} className="text-[15px] em:text-[16px] text-black leading-[176%] mb-[30px] line-through">
      {children}
    </del>
  );
};

{/* Common */ }