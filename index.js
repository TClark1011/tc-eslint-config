module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsdoc/recommended",
		"plugin:promise/recommended",
		"plugin:radar/recommended",
		"prettier",
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"plugins": [
		"@typescript-eslint",
		"jsdoc",
		"prefer-arrow",
		"no-secrets",
		"promise",
		"radar",
		"fp",
		"const-case",
	],
	"rules": {
		"indent": [
			"error",
			"tab",
			{
				"VariableDeclarator": 1,
				"SwitchCase": 1,
				"ignoredNodes": ["ConditionalExpression"],
			},
		],
		"linebreak-style": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"prefer-arrow-callback": ["error"],
		"brace-style": "error",
		"no-mixed-spaces-and-tabs": "off",
		"no-useless-escape": "off",
		"no-warning-comments": "warn",
		"prefer-const": "error",
		"max-len": ["warn", { "comments": 60, "code": 80 }],
		//# Typescript rules
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-namespace": "off",
		//# "jsdoc" rules
		"jsdoc/require-jsdoc": [
			"warn",
			{
				require: {
					"ArrowFunctionExpression": true,
					"ClassDeclaration": true,
					"ClassExpression": true,
					"FunctionDeclaration": true,
					"FunctionExpression": true,
					"MethodDefinition": true,
				},
				contexts: [
					"ArrowFunctionExpression",
					"ClassDeclaration",
					"ClassExpression",
					"ClassProperty",
					"FunctionDeclaration", // function
					"FunctionExpression",
					"MethodDefinition",
					"TSDeclareFunction", // function without body
					"TSEnumDeclaration",
					"TSInterfaceDeclaration",
					"TSMethodSignature",
					"TSModuleDeclaration", // namespace
					"TSTypeAliasDeclaration",
					"VariableDeclaration",
				],
			},
		],
		"jsdoc/no-undefined-types": "off",
		"jsdoc/no-types": ["error"],
		//# "prefer arrow function" rules
		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{
				disallowPrototype: true,
				singleReturnOnly: false,
				classPropertiesAllowed: false,
			},
		],
		//# "no secret" plugin rule
		"no-secrets/no-secrets": "error",
		//# "fp" plugin rules
		"fp/no-mutating-methods": ["error"],
		//# static const uppercase name rule
		"const-case/uppercase": "error",
	},
};
