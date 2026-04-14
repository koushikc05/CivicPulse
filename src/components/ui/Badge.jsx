import React from "react";

const colorMap = {
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  yellow: "bg-amber-50 text-amber-700 border-amber-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  red: "bg-red-50 text-red-700 border-red-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  gray: "bg-gray-50 text-gray-600 border-gray-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
};

const sizeMap = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm",
};

export default function Badge({
  label,
  color = "gray",
  size = "md",
  dot = false,
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-semibold rounded-full border
        tracking-wide uppercase
        ${colorMap[color] || colorMap.gray}
        ${sizeMap[size] || sizeMap.md}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            color === "red"
              ? "bg-red-500"
              : color === "green"
              ? "bg-emerald-500"
              : color === "yellow"
              ? "bg-amber-500"
              : color === "orange"
              ? "bg-orange-500"
              : color === "blue"
              ? "bg-blue-500"
              : "bg-gray-400"
          }`}
        />
      )}
      {label}
    </span>
  );
}
