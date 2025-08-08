"use client";

import { classNames } from "@/helpers/classes";
import "../globals.css";
import Icon from "./icon";

function inner(label?: string, icon?: string) {
  return (
    <>
      {label}
      {icon && (
        <span className="rounded-full w-10 aspect-square text-black ml-2 flex items-center justify-center bg-[#DBDAD9]">
          <Icon name={icon} />
        </span>
      )}
    </>
  );
}

export function Button({
  label = "Click Me",
  link,
  icon,
  type = "button",
  textSize = "regular",
  onClick,
  italic,
  bold,
}: Readonly<{
  label?: string;
  icon?: string;
  link?: string;
  type?: "button" | "submit";
  textSize?: "large" | "regular";
  italic?: boolean;
  bold?: boolean;
  onClick?: () => void;
}>) {
  const classes = classNames(
    "flex",
    "items-center",
    "justify-center",

    "h-12",

    "p-2",
    "px-6",
    "rounded-full",

    "gap-4",

    "bg-linear-to-r",
    "from-[#00887E]",
    "to-[#093124]",

    "cursor-pointer",

    textSize === "large" ? "text-lg" : "text-md",
    "text-[#C6E7E6]",

    bold ? "font-bold" : "",
    italic ? "italic" : "",

    "border",
    "border-black",
    icon ? "pr-1" : ""
  );
  if (link) {
    return (
      <a href={link} className={classes}>
        {inner(label, icon)}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type={type}>
      {inner(label, icon)}
    </button>
  );
}

export default Button;
