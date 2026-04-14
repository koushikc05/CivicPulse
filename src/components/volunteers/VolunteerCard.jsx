import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { UserPlus, MapPin, Star, Clock } from "lucide-react";

export default function VolunteerCard({
  volunteer,
  matchScore,
  onAssign,
  showAssign = false,
}) {
  return (
    <Card hoverable>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-civic-green to-emerald-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            {(volunteer.name || "V").charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {volunteer.name}
            </h3>
            <Badge
              label={volunteer.status || "available"}
              color={volunteer.status === "available" ? "green" : "yellow"}
              size="sm"
            />
          </div>
        </div>

        {matchScore !== undefined && (
          <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 rounded-lg border border-emerald-100">
            <Star className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
            <span className="text-xs font-bold text-emerald-700">
              {matchScore}
            </span>
          </div>
        )}
      </div>

      {/* Skills */}
      {volunteer.skills && volunteer.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {volunteer.skills.map((skill) => (
            <Badge key={skill} label={skill} color="blue" size="sm" />
          ))}
        </div>
      )}

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
        {volunteer.location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {volunteer.location}
          </span>
        )}
        {volunteer.availability && (
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {volunteer.availability}
          </span>
        )}
      </div>

      {/* Assign button */}
      {showAssign && (
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAssign && onAssign(volunteer)}
          icon={UserPlus}
        >
          Assign
        </Button>
      )}
    </Card>
  );
}
