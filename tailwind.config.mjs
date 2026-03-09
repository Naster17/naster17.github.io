/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";
import typography from "@tailwindcss/typography";
import daisyUI from "daisyui";
import { SITE_THEME } from "./src/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  safelist: [
    "alert",
    "alert-info",
    "alert-success",
    "alert-warning",
    "alert-error",
  ],
  plugins: [daisyUI, typography, addDynamicIconSelectors()],
  daisyui: {
    themes: [
      {
        hacker: {
          primary: "#22d3ee", // Cyan
          "primary-content": "#000000",
          secondary: "#34d399", // Emerald
          "secondary-content": "#000000",
          accent: "#fbbf24", // Amber
          "accent-content": "#000000",
          neutral: "#0f172a", // Dark slate
          "neutral-content": "#94a3b8",
          "base-100": "#030712", // Near black
          "base-200": "#111827",
          "base-300": "#1f2937",
          "base-content": "#e2e8f0",
          info: "#22d3ee",
          "info-content": "#000000",
          success: "#34d399",
          "success-content": "#000000",
          warning: "#fbbf24",
          "warning-content": "#000000",
          error: "#f87171",
          "error-content": "#000000",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "hacker", // name of one of the included themes for dark mode
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
