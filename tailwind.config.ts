import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FD853A",
        lightBlavck: "#171717",
        secondary: "#344054",
      },
      fontSize: {
        "20px": "1.25rem",
        primaryHeading: "5.9375rem",
      },
    },
  },
  plugins: [],
};
export default config;
