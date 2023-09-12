/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'poster': 'url(/poster.png)'
      },
      fontFamily:{
        'dm-sans': ['var(--font-dm-sans)'],
        'poppins': ['var(--font-poppins)']
      },
      colors:{
        'primary': '#BE123C',
        'gray-333': "#333333"
      }
    },
  },
  plugins: [],
}
