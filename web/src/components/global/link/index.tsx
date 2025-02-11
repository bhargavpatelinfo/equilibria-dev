import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

import { LinkType } from "../../../../lib/sanity/types/linkType";
import { resolveUrl } from "../../../../lib/utils/resolveUrl";
import { cn } from "../../../../lib/utils/helperFunctions";

const Link: React.FC<
  PropsWithChildren<
    Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, "to" | "href"> & {
      to: string | LinkType | null | undefined;
      target?: React.HTMLAttributeAnchorTarget;
      className?: string;
    }
  >
> = ({ to, target, children, className, prefetch, ...props }) => {
  if (!to) {
    return null;
  }
  if (typeof to === "object") {
    const link = resolveUrl(to);
    const isExternal = to?.openTheLinkinANewWindow;
    if (
      link?.startsWith("http") ||
      link?.startsWith("mailto:") ||
      link?.startsWith("tel:")
    ) {
      return (
        <NextLink
          href={link || "#"}
          target={"_blank"}
          rel="noopener noreferrer"
          className={cn(className)}
          prefetch={prefetch ?? false}
          {...props}
        >
          {children}
        </NextLink>
      );
    } else {
      return (
        <NextLink
          href={link || "#"}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : ""}
          className={cn(className)}
          prefetch={prefetch ?? false}
          {...props}
        >
          {children}
        </NextLink>
      );
    }
  } else if (
    to?.startsWith("http") ||
    to?.startsWith("mailto:") ||
    to?.startsWith("tel:")
  ) {
    return (
      <NextLink
        href={to || "#"}
        target={"_blank"}
        rel="noopener noreferrer"
        className={cn(className)}
        prefetch={prefetch ?? false}
        {...props}
      >
        {children}
      </NextLink>
    );
  } else {
    return (
      <NextLink
        href={to || "#"}
        target={target ?? "_self"}
        rel={target ? "noopener noreferrer" : ""}
        className={cn(className)}
        prefetch={prefetch ?? false}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
};

export default Link;