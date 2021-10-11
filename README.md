# tc-eslint-config

Thomas Clark's preferred eslint configuration

## Plugins

This config uses the following plugins:

- **@typescript-eslint:** Eslint rules for typescript.
- **JSDocs:** Require high quality, standards-conforming jsdoc comments for all your functions and classes.
- **Promise:** Enforce good error-catching practices when using promises
- **Radar:** Looks out for problematic coding practices
- **No Secret:** Watches for any values that appear like they may be secrets such as API keys
- **Prefer Arrow:** Arrow functions are preferred over the use of the `function` keyword. Functions that use the `this` keyword are exceptions.
- **Compat:** Warns you when you use code that is not supported by your list of browsers to support.
- **Const Case:** Lets you configure preferred naming schemes for variables that store constant static values.
- **Prettier:** Disables code style rules that could create discrepancies with prettier.
- **FP:** Help enforce good functional programming code styles

## Rules

This eslint config extends the airbnb 'base' config and its corresponding typescript extension and also has its own rules: These are some of the most notable rules used in this configuration:

- **Quotes:** Double quotes. Exceptions are allowed for backticks when using template strings. Single quotes can also be used if the string contains double quotes within it.
- **Indent:** Tab indentation.
- **Semicolon:** Must always use semicolon and end of lines.
- **No Warning Comments:** "Warning" comments that begin with either `//TODO` or `//FIXME` will throw warnings. This helps remind you of work you need to finish.
- **No Mutating Methods:** Methods of arrays or objects that perform mutations will trigger warnings
- **Const Case - Uppercase:** Variables that refer to static values and do not change must be named in all uppercase.

## ESLint Setup

If you have already setup eslint, skip to step 4.

## 1. Install Base Packages

`yarn add --dev eslint prettier prettier-eslint`

## 2. Setup Initial ESLint

`yarn run eslint --init`

Select the most minimal setup option

## 3. Setup Prettier Config

Create a file name `.prettierrc` and copy the following into it:

```json
{
	"singleQuote": false,
	"useTabs": true
}
```

### 4. Add Config Package:

`yarn add --dev eslint-config-thomas-clark`

### 5. Extend config:

Inside eslint config:

```javascript
extends: [
	.../* any lower priority extended configs here */,
	"thomas-clark",
	.../* any higher priority extended configs here */
]
```

### 6. Point to TS Config

Add this to the root level of your eslint config file:

```javascript
overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
```


### 7. Browserlist
To make use of the `compat` eslint plugin you must fill out the `"browserlist"` key in your `package.json`. or in their own file. Instructions [here](https://github.com/browserslist/browserslist).

You can also disable `compat` by adding this to your rules:

```json
'compat/compat': 'off',
```

### 8. (Optional) Extra Configuration:

These are some changes you may want to make to the rules. Add these inside the "rules" section of eslint config.

#### No React In Scope (Required if using NextJS)
```javascript
'react/react-in-jsx-scope': 'off',
```

#### Disable jsdoc requirement:

```javascript
"jsdoc/require-jsdoc": "off"
```

#### Allow Mutating Methods
```javascript
"fp/no-mutating-methods": "off"
```

#### Change to Single Quotes

```javascript
quotes: ["error", "single"]
```

#### Disable Static const Naming Scheme
```javascript
"const-case/uppercase": "off"
```

