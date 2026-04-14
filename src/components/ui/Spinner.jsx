import React from "react";

const sizeMap = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-10 h-10 border-[3px]",
};

const colorMap = {
  green: "border-civic-green",
  white: "border-white",
  gray: "border-gray-400",
};

export default function Spinner({
  size = "md",
  color = "green",
  className = "",
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          animate-spin rounded-full
          border-t-transparent
          ${sizeMap[size] || sizeMap.md}
          ${colorMap[color] || colorMap.green}
        `}
      />
    </div>
  );
}
