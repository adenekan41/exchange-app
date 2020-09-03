module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'react/jsx-filename-extension': [0],
		'import/no-unresolved': [0],
		'no-param-reassign': [0],
		'no-shadow': [0],
		'react/default-props-match-prop-types': [0],
		'react/require-default-props': [0],
		'react/forbid-prop-types': [0],
	},
};
