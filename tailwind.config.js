/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "surface-variant": "#e7e0ed",
        "surface-container-high": "#ede5f3",
        "on-tertiary-fixed-variant": "#673d00",
        "secondary-container": "#64f9bc",
        "on-surface-variant": "#494454",
        "surface-container-low": "#f8f1fe",
        "on-error-container": "#93000a",
        "primary": "#6b38d4",
        "on-surface": "#1d1a23",
        "error": "#ba1a1a",
        "on-secondary-fixed": "#002114",
        "on-tertiary-fixed": "#2c1700",
        "on-tertiary-container": "#fffbff",
        "surface-container-lowest": "#ffffff",
        "tertiary": "#855000",
        "primary-fixed-dim": "#d0bcff",
        "on-tertiary": "#ffffff",
        "surface-bright": "#fef7ff",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#ffb869",
        "primary-fixed": "#e9ddff",
        "inverse-primary": "#d0bcff",
        "tertiary-fixed": "#ffdcbb",
        "secondary": "#006c4b",
        "inverse-surface": "#322f39",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#005137",
        "surface-container-highest": "#e7e0ed",
        "surface-tint": "#6d3bd7",
        "outline-variant": "#cbc3d7",
        "on-secondary-container": "#00714e",
        "inverse-on-surface": "#f5eefb",
        "on-background": "#1d1a23",
        "primary-container": "#8455ef",
        "surface-container": "#f3ebf8",
        "outline": "#7b7486",
        "on-primary-fixed": "#23005c",
        "on-primary-fixed-variant": "#5516be",
        "surface": "#fef7ff",
        "background": "#fef7ff",
        "surface-dim": "#ded7e4",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "on-primary-container": "#fffbff",
        "secondary-fixed-dim": "#45dfa4",
        "tertiary-container": "#a76500",
        "secondary-fixed": "#68fcbf"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        xs: "8px",
        xl: "48px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        unit: "4px",
        gutter: "20px",
        margin: "24px"
      },
      fontFamily: {
        h1: ["Plus Jakarta Sans"],
        h2: ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        button: ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "label-sm": ["Plus Jakarta Sans"],
        h3: ["Plus Jakarta Sans"]
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" }],
        h2: ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "500" }],
        button: ["16px", { lineHeight: "1", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "500" }],
        "label-sm": ["14px", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "600" }],
        h3: ["20px", { lineHeight: "1.4", fontWeight: "700" }]
      }
    }
  },
  plugins: [],
}