module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		'no-unused-vars': 'warn',
		'object-curly-spacing': ['error', 'always'],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'vite.config.js',
					'**/*.config.js',
					'**/vite.*.js',
				],
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
			},
		],
		'vue/multi-word-component-names': 'off',
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'],
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
			},
		],
		'import/no-unresolved': [
			'error',
			{
				ignore: ['^@/'],
			},
		],
		'import/prefer-default-export': 'off',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src']],
				extensions: ['.js', '.vue'],
			},
		},
	},
}
