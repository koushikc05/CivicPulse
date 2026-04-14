import React from "react";
import Card from "../components/ui/Card";
import { Users, UserPlus, Award, Globe } from "lucide-react";

export default function Volunteers() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
          <Users className="w-3.5 h-3.5" />
          Volunteers
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-800">
          Volunteer Hub
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Register and manage community volunteers
        </p>
      </div>

      <Card className="text-center">
        <div className="py-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
            <UserPlus className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-lg font-bold font-display text-gray-800 mb-2">
            Volunteer Management — Day 7
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Full volunteer registration, skill profiles, availability
            management, and performance tracking coming soon.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <UserPlus className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <span className="text-[10px] text-amber-700 font-medium">Register</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <Award className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <span className="text-[10px] text-amber-700 font-medium">Skills</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
              <Globe className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <span className="text-[10px] text-amber-700 font-medium">Availability</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
