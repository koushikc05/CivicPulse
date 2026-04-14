export const ROLES = {
  ADMIN: "admin",
  FIELD_WORKER: "field_worker",
  VOLUNTEER: "volunteer",
};

export const CATEGORIES = [
  "Food",
  "Medical",
  "Shelter",
  "Education",
  "Water",
  "Transport",
  "Other",
];

export const URGENCY_LEVELS = ["Low", "Medium", "High", "Critical"];

export const URGENCY_COLORS = {
  Low: "green",
  Medium: "yellow",
  High: "orange",
  Critical: "red",
};

export const TASK_STATUS = {
  PENDING: "pending",
  ACCEPTED: "accepted",
  COMPLETED: "completed",
};

export const SKILLS = [
  "Medical",
  "Cooking",
  "Transport",
  "Teaching",
  "Construction",
  "Counselling",
  "IT",
  "Legal",
];

export const AVAILABILITY = ["Weekdays", "Weekends", "Full-time", "On-call"];

export const ROLE_LABELS = {
  [ROLES.ADMIN]: "NGO Admin",
  [ROLES.FIELD_WORKER]: "Field Worker",
  [ROLES.VOLUNTEER]: "Volunteer",
};

export const ROLE_DESCRIPTIONS = {
  [ROLES.ADMIN]: "Manage needs and volunteers",
  [ROLES.FIELD_WORKER]: "Report community needs",
  [ROLES.VOLUNTEER]: "Help where needed most",
};
