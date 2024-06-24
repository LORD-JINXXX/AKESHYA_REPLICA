import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        raleway: ['var(--font-raleway)'],
        open_sans: ['var(--font-open_sans)']
      },

      keyframes: {
        oscillate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // adjust the value to control the amplitude of the oscillation
        },
      },
      animation: {
        'oscillate-y': 'oscillate 2s ease-in-out infinite', // adjust the duration as needed
      },
    },
  },
  plugins: [],
};
export default config;
