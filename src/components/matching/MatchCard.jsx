import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { URGENCY_COLORS } from "../../constants";
import { Star, UserPlus, ArrowRight } from "lucide-react";

export default function MatchCard({ need, matches = [], onAssign }) {
  const urgencyColor = URGENCY_COLORS[need?.urgency] || "gray";

  return (
    <Card className="overflow-hidden">
      {/* Need summary header */}
      <div className="pb-4 mb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <Badge label={need?.category} color="blue" size="sm" />
          <Badge label={need?.urgency} color={urgencyColor} size="sm" dot />
        </div>
        <p className="text-sm text-gray-700 line-clamp-2">
          {need?.description}
        </p>
      </div>

      {/* Matched volunteers */}
      <p className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
        Top Matches
      </p>
      <div className="space-y-2.5">
        {matches.map((volunteer, idx) => (
          <div
            key={volunteer.id || idx}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-civic-green/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-civic-green to-emerald-400 flex items-center justify-center text-white text-xs font-bold">
                {(volunteer.name || "V").charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {volunteer.name}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="font-semibold text-amber-600">
                    {volunteer.matchScore}
                  </span>
                  <span>match score</span>
                </div>
              </div>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => onAssign && onAssign(need, volunteer)}
              icon={UserPlus}
            >
              Assign
            </Button>
          </div>
        ))}

        {matches.length === 0 && (
          <p className="text-xs text-gray-400 text-center py-4 italic">
            No volunteers matched yet
          </p>
        )}
      </div>
    </Card>
  );
}
