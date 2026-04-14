import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { URGENCY_COLORS } from "../../constants";
import { calculatePriority } from "../../utils/priorityScore";
import { MapPin, Users, Clock, Zap, CheckCircle } from "lucide-react";

function getDaysAgo(createdAt) {
  if (!createdAt) return 0;
  const date = createdAt.toDate ? createdAt.toDate() : new Date(createdAt);
  return Math.floor((new Date() - date) / (1000 * 60 * 60 * 24));
}

export default function NeedCard({
  need,
  onStatusChange,
  showMatchButton = false,
  onMatch,
}) {
  const daysAgo = getDaysAgo(need.createdAt);
  const priority = calculatePriority(need);
  const urgencyColor = URGENCY_COLORS[need.urgency] || "gray";

  return (
    <Card
      hoverable
      className={`relative overflow-hidden ${
        need.urgency === "Critical" ? "critical-pulse" : ""
      }`}
    >
      {/* Priority score indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1 text-xs">
        <Zap className="w-3 h-3 text-amber-500" />
        <span className="font-bold text-amber-600">{priority}</span>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge label={need.category} color="blue" size="sm" />
        <Badge label={need.urgency} color={urgencyColor} size="sm" dot />
        <Badge
          label={need.status}
          color={need.status === "open" ? "green" : need.status === "resolved" ? "gray" : "yellow"}
          size="sm"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-2">
        {need.description}
      </p>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4">
        {need.location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {need.location}
          </span>
        )}
        {need.peopleAffected > 0 && (
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {need.peopleAffected} affected
          </span>
        )}
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {daysAgo === 0 ? "Today" : `${daysAgo}d ago`}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {showMatchButton && need.status === "open" && (
          <Button
            size="sm"
            variant="primary"
            onClick={() => onMatch && onMatch(need)}
            icon={Users}
          >
            Find Volunteers
          </Button>
        )}
        {onStatusChange && need.status !== "resolved" && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onStatusChange(need.id, "resolved")}
            icon={CheckCircle}
          >
            Resolve
          </Button>
        )}
      </div>
    </Card>
  );
}
