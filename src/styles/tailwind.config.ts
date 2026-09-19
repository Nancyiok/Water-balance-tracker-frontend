/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-dark": "#0F3460",
      primary: "#1B6CA8",
      "primary-light": "#4A90C2",
      "primary-soft": "#A8D0E6",
      "primary-foam": "#E3F2FD",
      accent: "#00C2CB",
      "accent-dark": "#0891A0",
      "neutral-50": "#F4F7F9",
      "neutral-100": "#E8EDF1",
      "neutral-300": "#C4CDD5",
      "neutral-500": "#7B8794",
      "neutral-900": "#2D3B45",
      white: "#FFFFFF",
      "surface-soft": "#FBFDFE",
      success: "#3DBE8B",
      warning: "#E8A94A",
      danger: "#D9695F",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "progress-gradient":
          "linear-gradient(135deg, #1B6CA8 0%, #00C2CB 100%)",
      },
    },
  },
};
