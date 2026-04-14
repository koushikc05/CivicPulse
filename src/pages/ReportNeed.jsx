import React from "react";
import Card from "../components/ui/Card";
import { FileText, MapPin, Users, AlertTriangle, Clipboard, Send } from "lucide-react";

const FIELDS_PREVIEW = [
  { icon: Clipboard, label: "Category", desc: "Food, Medical, Shelter, Education..." },
  { icon: AlertTriangle, label: "Urgency Level", desc: "Low, Medium, High, Critical" },
  { icon: FileText, label: "Description", desc: "Detailed description of the need" },
  { icon: MapPin, label: "Location", desc: "Pin on map or enter address" },
  { icon: Users, label: "People Affected", desc: "Approximate number of people" },
];

export default function ReportNeed() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
          <FileText className="w-3.5 h-3.5" />
          Report
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-800">
          Report a Community Need
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Help us understand what your community needs most
        </p>
      </div>

      {/* Coming soon card */}
      <Card className="text-center">
        <div className="py-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-civic-green to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-civic-md animate-float">
            <Send className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-lg font-bold font-display text-gray-800 mb-2">
            Full Report Form — Day 3
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
            The complete need reporting form with location picker, photo upload,
            and smart category detection will be available here.
          </p>

          {/* Fields preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {FIELDS_PREVIEW.map((field) => (
              <div
                key={field.label}
                className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-left"
              >
                <div className="flex items-center gap-2 mb-1">
                  <field.icon className="w-3.5 h-3.5 text-civic-green" />
                  <span className="text-xs font-semibold text-gray-700">
                    {field.label}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400">{field.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
