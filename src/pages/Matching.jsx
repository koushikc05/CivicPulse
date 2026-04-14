import React from "react";
import Card from "../components/ui/Card";
import { Shuffle, Zap, Brain, Target } from "lucide-react";

export default function Matching() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
          <Shuffle className="w-3.5 h-3.5" />
          Matching
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-800">
          Smart Volunteer Matching
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          AI-powered matching of volunteers to community needs
        </p>
      </div>

      <Card className="text-center">
        <div className="py-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-lg font-bold font-display text-gray-800 mb-2">
            Matching Engine — Day 8
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Smart skill-based, proximity-aware, and availability-optimized
            volunteer matching for every reported need.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
              <Target className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-[10px] text-blue-700 font-medium">Skills</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
              <Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-[10px] text-blue-700 font-medium">Proximity</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
              <Shuffle className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-[10px] text-blue-700 font-medium">Scoring</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
