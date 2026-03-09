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
        winter: {
          primary: "#1d4ed8",
          "primary-content": "#ffffff",
          secondary: "#0ea5e9",
          "secondary-content": "#ffffff",
          accent: "#f59e0b",
          "accent-content": "#ffffff",
          neutral: "#1f2937",
          "neutral-content": "#f3f4f6",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
          info: "#0ea5e9",
          "info-content": "#ffffff",
          success: "#22c55e",
          "success-content": "#ffffff",
          warning: "#f59e0b",
          "warning-content": "#ffffff",
          error: "#ef4444",
          "error-content": "#ffffff",
        },
      },
      {
        hacker: {
          primary: "#22d3ee",
          "primary-content": "#000000",
          secondary: "#34d399",
          "secondary-content": "#000000",
          accent: "#fbbf24",
          "accent-content": "#000000",
          neutral: "#0f172a",
          "neutral-content": "#94a3b8",
          "base-100": "#030712",
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
    ],
    darkTheme: "hacker",
    logs: false,
  },
};
