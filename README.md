# tc-eslint-config

Thomas Clark's preferred eslint configuration

## Plugins

This config uses the following plugins:

- **JSDocs:** Require high quality, standards-conforming jsdoc comments for all your functions and classes.
- **Promise:** Enforce good error-catching practices when using promises
- **Radar:** Looks out for problematic coding practices
- **No Secret:** Watches for any values that appear like they may be secrets such as API keys
- **Prefer Arrow:** Arrow functions are preferred over the use of the `function` keyword. Functions that use the `this` keyword are exceptions.

## Rules

These are some of the most notable rules used in this configuration:

- **Quotes:** Double quotes. Exceptions are allowed for backticks when using template strings. Single quotes can also be used if the string contains double quotes within it.
- **Indent:** Tab indentation.
- **Semicolon:** Must always use semicolon and end of lines.
- **No Warning Comments:** "Warning" comments that begin with either `//TODO` or `//FIXME` will throw warnings. This helps remind you of work you need to finish.

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

### 6. (Optional) Extra Configuration:

These are some changes you may want to make to the rules. Add these inside the "rules" section of eslint config.

#### Disable jsdoc requirement:

```javascript
"jsdoc/require-jsdoc": "off"
```
