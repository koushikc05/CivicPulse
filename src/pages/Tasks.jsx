import React from "react";
import Card from "../components/ui/Card";
import { ClipboardList, Clock, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Tasks() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
          <ClipboardList className="w-3.5 h-3.5" />
          Tasks
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-800">
          Task Management
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Track assigned tasks and their completion status
        </p>
      </div>

      <Card className="text-center">
        <div className="py-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-lg font-bold font-display text-gray-800 mb-2">
            Task Tracking — Day 8
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Accept, track, and complete assigned volunteer tasks with real-time
            status updates.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <Clock className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <span className="text-[10px] text-emerald-700 font-medium">Pending</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <ArrowUpRight className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <span className="text-[10px] text-emerald-700 font-medium">In Progress</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <span className="text-[10px] text-emerald-700 font-medium">Completed</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
