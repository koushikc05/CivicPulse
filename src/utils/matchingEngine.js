import { getDistance } from "./distanceCalc";

/**
 * Match volunteers to a need based on skills, distance, and availability.
 * Returns top 3 volunteers sorted by match score (descending).
 */
export function matchVolunteers(need, volunteers) {
  const scored = volunteers
    .filter((v) => v.status === "available")
    .map((volunteer) => {
      let score = 0;

      // +50 if volunteer has matching skill
      if (
        volunteer.skills &&
        volunteer.skills.includes(need.category)
      ) {
        score += 50;
      }

      // Distance scoring
      if (need.lat && need.lng && volunteer.lat && volunteer.lng) {
        const distance = getDistance(
          need.lat,
          need.lng,
          volunteer.lat,
          volunteer.lng
        );
        if (distance < 5) {
          score += 30;
        } else if (distance < 15) {
          score += 15;
        }
      }

      // Availability scoring
      if (volunteer.availability === "Full-time") {
        score += 20;
      } else if (volunteer.availability === "On-call") {
        score += 10;
      }

      return {
        ...volunteer,
        matchScore: score,
      };
    });

  // Sort by score descending, return top 3
  scored.sort((a, b) => b.matchScore - a.matchScore);
  return scored.slice(0, 3);
}
