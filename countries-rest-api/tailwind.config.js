/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'DarkBlue': 'hsl(209, 23%, 22%)',
        'DarkModeBackground': 'hsl(207, 26%, 17%)',
        'LightModeText': 'hsl(200, 15%, 8%)',
        'LightModeInput': 'hsl(0, 0%, 52%)',
        'LightModeBackground': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
};
