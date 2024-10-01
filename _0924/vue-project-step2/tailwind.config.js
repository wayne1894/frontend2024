/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      colors: {
				'red': 'var(--red)',
				'green': 'var(--green)'
      },
      screens: {
        'md': '1024px',
      }
    },
  },
  plugins: [],
}

