"use client";
import "../globals.css";

export function Icon({
  name,
}: Readonly<{
  name: string;
}>) {
  switch (name) {
    case "arrow-top":
      return <span>A</span>;
    case "arrow-right":
      return <span>B</span>;
    case "arrow-bottom":
      return <span>C</span>;
    case "arrow-left":
      return <span>D</span>;
    case "arrow-top-right":
      return <span>E</span>;
    case "arrow-bottom-right":
      return <span>F</span>;
    case "arrow-bottom-left":
      return <span>G</span>;
    case "arrow-top-left":
      return <span>H</span>;
    default:
      return <span>!</span>;
  }
}

export default Icon;
