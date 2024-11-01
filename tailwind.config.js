/** @type {import('tailwindcss').Config} */

const colors = {
	transparent: 'transparent',
	current: 'currentColor',
	white: {
		DEFAULT: '#ffffff',
	},
	blue: {
		50: '#89C4F4',
		DEFAULT: '#3b82f6',
	},
	purple: {
		50: '#EAE5F8',
		DEFAULT: '#6F4FCC',
	},
}

module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}', // добавьте путь к вашим компонентам
	],
	theme: {
		colors,
		textColor: colors,
		fill: colors,
		borderColor: colors,

		extend: {
			borderRadius: {
				1.25: '0.313rem',
			},
			transitionProperty: {
				width: 'width',
				height: 'height, min-height',
				spacing: 'margin, padding',
			},
			maxWidth: {
				87.5: '21.875rem',
			},
			minWidth: {
				75: '18.75rem',
			},
		},
	},
	variants: {
		extend: {
			borderColor: [
				'hover',
				'focus',
				'dark',
				'group-focus',
				'focus-within',
			],
			fill: ['hover', 'dark', 'group-hover'],
			stroke: ['hover', 'dark'],
			transitionDelay: ['hover'],
			backdropOpacity: ['hover', 'group-hover'],
			opacity: ['hover', 'group-hover'],
			visibility: ['group-hover'],
			colors: [
				'group-hover',
				'indeterminate',
				'group-active',
				'group/btn',
				'group-hover/btn',
			],
			height: ['responsive', 'hover', 'focus'],
			padding: ['last'],
			textColor: [
				'group-hover',
				'indeterminate',
				'group-active',
				'group/btn',
				'group-hover/btn',
			],
		},
	},

	plugins: [],
}
