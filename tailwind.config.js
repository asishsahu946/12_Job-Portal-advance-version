import { withMT } from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl-max': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
      'xl-max': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
      'lg-max': {'max': '1023px'}, // => @media (max-width: 1023px) { ... }
      'md-max': {'max': '767px'}, // => @media (max-width: 767px) { ... }
      'sm-max': {'max': '639px'}, // => @media (max-width: 639px) { ... }
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}