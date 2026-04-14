import React from "react";
import Card from "../components/ui/Card";
import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
          <BarChart3 className="w-3.5 h-3.5" />
          Analytics
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-800">
          Analytics Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Comprehensive data insights for community impact assessment
        </p>
      </div>

      <Card className="text-center">
        <div className="py-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
            <Activity className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-lg font-bold font-display text-gray-800 mb-2">
            Analytics Suite — Day 9
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Interactive charts, trend analysis, category breakdowns, and
            impact metrics powered by Recharts.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-center">
              <BarChart3 className="w-5 h-5 text-rose-600 mx-auto mb-1" />
              <span className="text-[10px] text-rose-700 font-medium">Bar Charts</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-center">
              <PieChart className="w-5 h-5 text-rose-600 mx-auto mb-1" />
              <span className="text-[10px] text-rose-700 font-medium">Pie Charts</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-center">
              <TrendingUp className="w-5 h-5 text-rose-600 mx-auto mb-1" />
              <span className="text-[10px] text-rose-700 font-medium">Trends</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
