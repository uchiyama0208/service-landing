// src/components/ui/button.tsx
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
  secondary:
    "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

// <button>として使う時の型
type ButtonAsButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  type?: "button" | "submit" | "reset";
  href?: never;
};

// <Link>として使う時の型（アンカー属性もOK）
type ButtonAsLink = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    type?: never;
  };

type Common = { variant?: Variant; className?: string };

type ButtonProps = Common & (ButtonAsButton | ButtonAsLink);

function ButtonImpl(props: ButtonProps) {
  const { variant = "primary", className } = props;
  const classes = clsx(base, variants[variant], className);

  if ("href" in props) {
    const { href, ...rest } = props;
    return (
      <Link href={href} {...rest} className={classes}>
        {props.children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props;
  return (
    <button type={type} {...rest} className={classes}>
      {props.children}
    </button>
  );
}

export default ButtonImpl;
export const Button = ButtonImpl;
