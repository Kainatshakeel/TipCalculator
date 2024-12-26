import React from "react";

import dollar from "./icon-dollar.svg";
import person from "./icon-person.svg";

interface IconsProps {
  type: "dollar" | "person"; 
  size?: number;
  className?: string;
  color?: string;
  fill?: string;
}

const Icons: React.FC<IconsProps> = ({
  type,
  size = 24,
  className = "",
  color = "currentColor",
  fill = "currentColor",
}) => {
  let IconComponent: React.FC<React.SVGProps<SVGSVGElement>> | undefined;

  
  switch (type) {
    case "dollar":
      IconComponent = dollar;
      break;
    case "person":
      IconComponent = person;
      break;
    default:
      return null;
  }

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={className}
      style={{
        fontSize: size,
        width: size,
        height: size,
        color: color,
        fill: fill,
      }}
    />
  );
};

export default Icons;
