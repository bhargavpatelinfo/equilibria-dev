import React from "react";
import type { PropsWithChildren } from "react";
import Link from "../link";
import { cn } from "../../../../lib/utils/helperFunctions";
import { ButtonType, ButtonVariantType } from "../../../../lib/sanity/types";

export const buttonVariants: Record<ButtonVariantType, string> = {
  darkPink:
    "py-3 sm:py-4 px-6 sm:px-10 bg-darkPink rounded-[60px] text-white text-base sm:text-lg tracking-[-2%] border border-darkPink hover:bg-transparent basic-transition hover:text-darkPink block text-center w-full em:w-fi",

    darkPurple:"py-3 sm:py-4 px-6 sm:px-10 bg-darkPurple rounded-[60px] text-lightPink text-base sm:text-lg tracking-[-2%] border border-darkPurple hover:bg-transparent basic-transition hover:text-darkPurple block text-center w-full em:w-fit",

    lightPink:"py-3 sm:py-4 px-6 sm:px-10 bg-lightPink rounded-[60px] text-maroon text-base sm:text-lg tracking-[-2%] border border-lightPink hover:bg-transparent basic-transition hover:text-lightPink block text-center w-full em:w-fit",

    transparentWithPink:"py-3 sm:py-4 px-6 sm:px-10 bg-transparent rounded-[60px] text-white text-base sm:text-lg tracking-[-2%] border border-white hover:bg-lightPink basic-transition hover:text-maroon hover:border-lightPink block text-center w-full em:w-fit",

    transparentWithWhite:"bg-[teal]"
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
}

const Button: React.FC<
  PropsWithChildren<{
    block: ButtonType;
  }> &
    ButtonProps
> = ({ block, className = "" }) => {
  if (!block) return null;

  const { label, link, variant } = block || {};
  const variantClasses = buttonVariants[variant];
  return (
    <Link to={link} className={cn(variantClasses, className)}>
      <span>{label}</span>
    </Link>
  );
};
export default Button;
