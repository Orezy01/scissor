/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      gradientColorStops: {
        'blue-gradient': ['#005AE2', '#73E6FF'],
      },
      colors: {
        // blue: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", 
        primaryBlue: "#005AE2",
        primaryBlueBase: "#0065FE", 
        dark_purple: '#000235',
        btn_primary: '#7e7ee3',
        heading_color: '#abd9d9',
      },
      
      bgImage: {
        'circular-gradient': "linear-gradient(180deg, rgba(226, 233, 240, 0.70) 10.68%, rgba(220, 228, 235, 0.70) 44.01%, rgba(226, 233, 240, 0.00) 100%);"

      },
      
      maxWidth: {
        '600': '600px',
      },
      screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  
    },
  },
  plugins: [],
}

