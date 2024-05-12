/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			lavender: '#DCAFFF',
			brown: '#B9A5AA',
			denim: '#373E72',
			'off-black': '#1A1D35',
			eggshell: '#FFDFC9',
			'miami-pink': '#FF5E7B',
			peach: '#FF8070',
			white: '#FFFFFF',
			black: '#000000'
		},
		extend: {
			fontFamily: {
				vt323: ['VT323', 'sans-serif'],
				monofett: ['Monofett', 'sans-serif']
			}
		}
	},
	plugins: []
};
