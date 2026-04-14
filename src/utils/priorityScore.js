const URGENCY_WEIGHTS = {
  Low: 1,
  Medium: 2,
  High: 3,
  Critical: 4,
};

/**
 * Calculate a priority score for a need based on urgency, impact, and recency.
 * Higher score = higher priority.
 */
export function calculatePriority(need) {
  const urgencyWeight = URGENCY_WEIGHTS[need.urgency] || 1;
  const peopleAffected = need.peopleAffected || 0;

  // Calculate days since reported
  let daysSinceReported = 0;
  if (need.createdAt) {
    const createdDate =
      need.createdAt.toDate ? need.createdAt.toDate() : new Date(need.createdAt);
    const now = new Date();
    daysSinceReported = Math.floor(
      (now - createdDate) / (1000 * 60 * 60 * 24)
    );
  }

  const score =
    urgencyWeight * 40 + peopleAffected * 0.3 + daysSinceReported * 5;

  return Math.round(score);
}
