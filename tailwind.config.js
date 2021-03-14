module.exports = {
  purge: ['index.html', 'js/main.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		fontFamily: {
      overpass: ['Overpass', 'monospace'],
      overpass: ['Ubuntu', 'monospace']
    },
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  'white': 'hsl(0, 0%, 100%)',
		  'black': '#000000',
		  'gray-200': '#E5E7EB',
		  'gray-600': '#4B5563',
		  'lighter-red-1': 'hsl(355, 100%, 74%)',
		  'lighter-red': 'hsl(13, 100%, 72%)',
			'light-red-1': 'hsl(356, 100%, 66%)',
			'light-red': 'hsl(353, 100%, 62%)',
			'darker-blue': 'hsl(208, 49%, 24%)',
			'grayish-blue': 'hsl(240, 2%, 79%)',
			'darker-grayish-blue': 'hsl(207, 13%, 34%)',
			'darker-black-blue': 'hsl(240, 10%, 16%)',
			'darker-gray-blue': 'hsl(237, 17%, 21%)',
			'darker-desaturated-blue': 'hsl(237, 23%, 32%)'
		},
		letterSpacing: {
		  tightest: '-.07rem'
		},
		extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
