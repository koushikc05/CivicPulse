import React from "react";

export default function Card({
  children,
  className = "",
  onClick,
  hoverable = false,
  padding = "p-6",
  accent,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-2xl border border-gray-100
        ${padding}
        transition-all duration-300 ease-out
        ${hoverable
          ? "hover:shadow-elevated hover:-translate-y-0.5 cursor-pointer"
          : "shadow-sm"
        }
        ${accent ? `border-l-4 border-l-${accent}` : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
