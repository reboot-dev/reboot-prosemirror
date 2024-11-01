/* eslint-env node */

/** @type {import('eslint').ESLint.Options} */
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["prettier", "jest", "@typescript-eslint", "import"],
	extends: [
		"eslint:recommended",
		"prettier",
		"plugin:jest/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	// --------------------------------------------------------------------
	// Exclude files that are automatically generated or excluded from tsconfigs
	// --------------------------------------------------------------------
	rules: {
		// Very nice to help avoid property mutation on objects passed
		// by reference. However hard to turn on while we use immer in
		// slices that depends on this behavior.
		"no-param-reassign": ["off", { props: true }],

		"prefer-const": "error",
		"no-nested-ternary": "error",
		"object-shorthand": "error",

		// Import rules
		"import/no-default-export": "error",
		"import/no-duplicates": "error",

		/**
		 * While our prettier config enforces tabs for indentation,
		 * there are instances where spaces are used for alignment.
		 */
		"no-mixed-spaces-and-tabs": "off",
		"no-unused-vars": "off",
		"no-var": "error",
	},

	overrides: [
		{
			files: [
				"app/postcss.config.js",
				"*/scripts/debugEslint.js",
				"**/jest.config.js",
				"**/prettier.config.js",
			],
			env: { node: true, commonjs: true },
		},
		// allow "require()" in javascript files
		{
			files: ["./**/*.js"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
			},
		},
		{
			files: ["**/*.ts", "**/*.tsx"],
			excludedFiles: ["**/*.test.*"],
			parserOptions: {
				project: true,
				tsconfigRootDir: __dirname,
			},
			rules: {
				"@typescript-eslint/no-unnecessary-condition": "off",

				// ENFORCED
				"@typescript-eslint/no-floating-promises": "error",
				"@typescript-eslint/no-explicit-any": "error",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/ban-ts-comment": "off",
				"@typescript-eslint/consistent-type-imports": [
					"error",
					{
						prefer: "type-imports",
						fixStyle: "inline-type-imports",
					},
				],
				"@typescript-eslint/no-extraneous-class": "error",
				"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
				// TODO @shekhar turn on and fix errors
				"@typescript-eslint/strict-boolean-expressions": "off",
				"@typescript-eslint/no-unused-vars": [
					"error",
					{
						argsIgnorePattern: "^_",
						varsIgnorePattern: "^_",
						caughtErrorsIgnorePattern: "^_",
					},
				],
			},
		},
		{
			files: ["compiler-services/**/*"],
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: ["app/**/*"],
			extends: [
				"plugin:@next/next/recommended",
				"plugin:@next/next/core-web-vitals",
			],
			settings: {
				next: {
					rootDir: ["app"],
				},
			},
			rules: {
				// React
				"react/jsx-boolean-value": "error",
			},
		},
		{
			files: ["app/src/pages/**/*"],
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: ["app/cypress/**/*"],
			rules: {
				"jest/valid-describe-callback": "off",
				"jest/expect-expect": "off",
				"jest/valid-expect": "off",
			},
		},
		{
			files: ["design-system/**/*"],
			extends: ["plugin:storybook/recommended"],
			rules: {
				// Turn off unnecessary storybook rules
				"storybook/no-redundant-story-name": "off",

				// TODO @shekhar fix these errors
				"@typescript-eslint/no-explicit-any": "off",

				// React
				"react/jsx-boolean-value": "error",
			},
		},
		{
			files: ["design-system/utils/mock/matchMedia.js"],
			env: { browser: true },
		},
		{
			files: ["app/**/*", "design-system/**/*"],
			extends: [
				"plugin:react/recommended",
				"plugin:react-hooks/recommended",
				"plugin:jsx-a11y/recommended",
			],
			globals: {
				JSX: true,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			plugins: ["react", "react-hooks"],
			rules: {
				// Restricted strings (e.g. color names instead of tokens)
				"no-restricted-syntax": [
					"error",
					{
						selector:
							"Literal[value=/(text|fill|bg|border|divide)-[a-z]+-[\\d]+0/i]",
						message:
							"Color names (e.g. text-red-50) are not allowed in the files used by TailwindCSS. Use tokens (e.g. text-primary) instead. See design-system/tailwind.config.js for more information.",
					},
				],
				// warns if useEffect is missing or has extra dependencies
				"react-hooks/exhaustive-deps": [
					"warn",
					{
						additionalHooks: "(useEditorEffect$)",
					},
				],
				"jsx-a11y/anchor-is-valid": [
					"error",
					{
						components: ["Link"],
						allowHash: false,
						specialLink: ["hrefLeft", "hrefRight"],
						aspects: ["invalidHref", "preferButton"],
					},
				],

				"react/prop-types": "off",
				"react/prefer-exact-props": "error",
				"react/react-in-jsx-scope": "off",
				"react/jsx-key": [
					"error",
					{
						checkFragmentShorthand: true,
						checkKeyMustBeforeSpread: true,
						warnOnDuplicates: true,
					},
				],
				"react/jsx-max-depth": [
					"error",
					{
						max: 8,
					},
				],
			},
			settings: {
				react: {
					version: "detect",
				},
			},
		},
	],
};
