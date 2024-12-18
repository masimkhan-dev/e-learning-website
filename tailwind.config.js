/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS, JSX, TS, and TSX files in the src directory
    "./public/index.html",         // Includes the index.html file in the public directory
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Custom font family with Poppins as primary and sans-serif as fallback
      },
      colors: {
        primary: "#3498DB",   // Custom primary color
        secondary: "#F1C40F", // Custom secondary color
        danger: "#E74C3C",    // Custom danger (error) color
        success: "#2ECC71",   // Custom success color
      },
      container: {
        center: true, // Ensures containers are centered by default
        padding: {    // Adds default padding to containers at different breakpoints
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
