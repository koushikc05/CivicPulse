import React from "react";
import { Activity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Activity className="w-3.5 h-3.5 text-civic-green" />
          <span>
            CivicPulse © {new Date().getFullYear()} — Connecting Communities
          </span>
        </div>
        <div className="text-[10px] text-gray-300 hidden sm:block">
          Built with purpose
        </div>
      </div>
    </footer>
  );
}
