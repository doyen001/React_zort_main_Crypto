/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xm': '420px',
      },
      backgroundImage: {
        'footer': "url('/images/footer/bg.png')",
        'gradient': 'linear-gradient(45deg, #d53369, #daae51)',
      },
      backgroundPosition: {
        'offset-footer': '0px -240px',
      },
      colors: {
        'primary': '#3434FF',
      },
      fontFamily: {
        'Inter': ['Inter',],
        'DMSans' : ['DM Sans'],
        'Poppins' : ['Poppins']
      },
      zIndex: {
        '45': '45',
        '100': '100',
      }
    },
  },
  plugins: [],
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'linear-gradient(94.67deg, #6ff3f3, #7384f7)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}