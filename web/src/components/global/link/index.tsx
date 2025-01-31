import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

import { LinkType } from "../../../../lib/sanity/types/linkType";
import { resolveUrl } from "../../../../lib/utils/resolveUrl";

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
    return <span className={className} {...props}>{children}</span>;
  }

  const url = typeof to === "object" ? resolveUrl(to) : to;
  const openInNewWindow = typeof to === "object" && to?.openTheLinkinANewWindow;

  const rel = openInNewWindow ? "noopener noreferrer" : "";
  const linkTarget = openInNewWindow ? "_blank" : target ?? "_self";

  return (
    <NextLink
      href={url || "#"}
      rel={rel}
      target={linkTarget}
      className={className}
      prefetch={prefetch ?? false}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link