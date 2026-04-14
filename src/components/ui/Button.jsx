import React from "react";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-civic-green hover:bg-civic-green-dark text-white shadow-sm hover:shadow-civic-md",
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200",
  danger:
    "bg-red-600 hover:bg-red-700 text-white shadow-sm",
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-600",
  outline:
    "bg-transparent border-2 border-civic-green text-civic-green hover:bg-civic-green hover:text-white",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  className = "",
  icon: Icon,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        inline-flex items-center justify-center gap-2 
        font-semibold rounded-xl 
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-civic-green/30 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        active:scale-[0.98]
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      {children}
    </button>
  );
}
