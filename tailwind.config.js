/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3DBE29",
        
"secondary": "#5DA3FA",
        
"accent": "#B4161B",
        
"neutral": "#FF6263",
        
"base-100": "#FFFFFF",
        
"info": "#FF3C83",
        
"success": "#D31A50",
        
"warning": "#4C3AE3",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins:[require("daisyui")],
}

