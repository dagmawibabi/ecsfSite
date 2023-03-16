/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'courgette': ['Courgette'],
        'dancingScript': ['Dancing Script'],
        'marckScript': ['Marck Script'],
        'londrinaShadow': ['Londrina Shadow'],
        'passionsConflict': ['Passions Conflict'],
      }
    },
  },
  plugins: [],
}
