const KEYWORD_MAP = {
  Food: ["hunger", "food", "meal", "starving", "ration", "hungry", "feed"],
  Medical: ["sick", "hospital", "medicine", "injury", "health", "doctor", "medical", "clinic"],
  Shelter: ["homeless", "shelter", "roof", "housing", "displaced", "tent", "camp"],
  Water: ["water", "flood", "drought", "sanitation", "drinking", "well", "bore"],
  Education: ["school", "children", "education", "learn", "books", "teacher", "class"],
  Transport: ["transport", "vehicle", "ambulance", "travel", "road", "bus"],
};

const URGENCY_KEYWORDS = {
  Critical: ["critical", "urgent", "emergency", "dying", "crisis"],
  High: ["immediate", "severe", "serious", "desperate"],
  Medium: ["moderate", "needed", "soon"],
  Low: ["minor", "when possible", "low priority"],
};

/**
 * Parse OCR-extracted text to detect community need parameters.
 * Returns { category, description, urgency, peopleAffected }
 */
export function parseOCRText(text) {
  const lowerText = text.toLowerCase();

  // Detect category
  let category = "Other";
  for (const [cat, keywords] of Object.entries(KEYWORD_MAP)) {
    if (keywords.some((kw) => lowerText.includes(kw))) {
      category = cat;
      break;
    }
  }

  // Detect urgency
  let urgency = "Medium";
  for (const [level, keywords] of Object.entries(URGENCY_KEYWORDS)) {
    if (keywords.some((kw) => lowerText.includes(kw))) {
      urgency = level;
      break;
    }
  }

  // Extract number for people affected
  let peopleAffected = 0;
  const numberMatch = text.match(/(\d+)\s*(people|persons|families|individuals|villagers|residents)/i);
  if (numberMatch) {
    peopleAffected = parseInt(numberMatch[1], 10);
  } else {
    const simpleNumber = text.match(/\b(\d{1,5})\b/);
    if (simpleNumber) {
      peopleAffected = parseInt(simpleNumber[1], 10);
    }
  }

  return {
    category,
    description: text.trim(),
    urgency,
    peopleAffected,
  };
}
