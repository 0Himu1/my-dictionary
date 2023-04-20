/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			merriweather: ['Merriweather', 'serif'],
		},
		colors: {
			primary: '#A341EC',
			transparent: 'transparent',
			gray: '#747474',
			dimBlack: '#2a2a2a',
		},
	},
	plugins: [],
};
