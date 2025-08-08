import React from "react";

import { classNames } from "@/helpers/classes";
import "../globals.css";

function getColumnClasses(size: "1/3" | "half" | "2/3" | "full") {
  switch (size) {
    case "1/3": {
      return "w-1/3";
    }
    case "half": {
      return "w-1/2";
    }
    case "2/3": {
      return "w-2/3";
    }
    case "full": {
      return "w-full";
    }
  }
}

export function Banner({
  url,
  title,
  text,
  subtitle,
  button,
  leftColumnSize = "1/3",
  textLeft,
  heightAuto,
  bgColor,
}: Readonly<{
  url?: string;
  text?: string;
  title?: string;
  subtitle?: string;
  button?: React.ReactNode;
  leftColumnSize?: "1/3" | "half" | "2/3" | "full";
  textLeft?: string | React.ReactNode;
  heightAuto?: boolean;
  bgColor?: string;
}>) {
  return (
    <div
      className={classNames(
        "w-full bg-cover bg-center relative flex gap-4 rounded-4xl p-18 text-white overflow-hidden",
        heightAuto ? "" : "h-96",
        heightAuto ? "" : "items-center",
        bgColor ? `bg-[${bgColor}]` : "bg-blue-900"
      )}
      style={{ backgroundImage: `url(${url})` }}
    >
      {leftColumnSize !== "full" && (
        <div className={getColumnClasses(leftColumnSize)}>
          {text && <p className="text-4xl font-bold">{textLeft}</p>}
        </div>
      )}
      <div className="flex flex-col gap-6">
        {title && <h1 className="text-6xl font-light">{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {text && <p>{text}</p>}
        {button && <div className="mt-8">{button}</div>}
      </div>
    </div>
  );
}
export default Banner;
