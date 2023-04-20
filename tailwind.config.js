/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {},
		fontFamily: {
			merriweather: ['Merriweather', 'serif'],
			inter: ['Inter', 'sans-serif'],
		},
		colors: {
			primary: '#A341EC',
			transparent: 'transparent',
			gray: '#747474',
			dimBlack: '#2a2a2a',
			dimWhite: '#f4f4f4',
		},
	},
	plugins: [],
};
