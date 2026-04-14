/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        civic: {
          green: "#16a34a",
          "green-light": "#dcfce7",
          "green-dark": "#15803d",
          red: "#dc2626",
          yellow: "#d97706",
          orange: "#f97316",
          blue: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "sans-serif"],
      },
      boxShadow: {
        "civic-sm": "0 1px 3px 0 rgba(22, 163, 74, 0.08), 0 1px 2px -1px rgba(22, 163, 74, 0.08)",
        "civic-md": "0 4px 6px -1px rgba(22, 163, 74, 0.1), 0 2px 4px -2px rgba(22, 163, 74, 0.1)",
        "civic-lg": "0 10px 25px -3px rgba(22, 163, 74, 0.15), 0 4px 6px -4px rgba(22, 163, 74, 0.1)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-in-left": "slideInLeft 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
