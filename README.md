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

## Usage

### 1. Add Package:

`yarn add --dev eslint-config-thomas-clark`

### 2. Setup eslint:

`eslint --init`

### 3. Extend config:

Inside eslint config:

```javascript
extends: [
	.../* any lower priority extended configs here */,
	"thomas-clark",
	.../* any higher priority extended configs here */
]
```

### 4. (Optional) Extra Configuration:

These are some changes you may want to make to the rules. Add these inside the "rules" section of eslint config.

#### Disable jsdoc requirement:

```javascript
"jsdoc/require-jsdoc": "off"
```
