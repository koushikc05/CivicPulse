import React from "react";
import { Inbox } from "lucide-react";
import Button from "./Button";

export default function EmptyState({
  icon: Icon = Inbox,
  title = "Nothing here yet",
  description = "There's no data to display at the moment.",
  actionLabel,
  onAction,
  className = "",
}) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center py-16 px-6 text-center
        animate-fade-in ${className}
      `}
    >
      <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-gray-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 font-display">
        {title}
      </h3>
      <p className="text-sm text-gray-500 max-w-sm mb-6 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
