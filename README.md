# tc-eslint-config

Thomas Clark's preferred eslint configuration

## Usage

### 1. Add Package:

`yarn add --dev eslint-config-thomas-clark`

### 2. Setup eslint:

`eslint --init`

### 3. Extend config:

Inside eslint config:

```javascript
extends: [
	...,
	"thomas-clark"
]
```

### 4. (Optional) Extra Configuration:

These are some changes you may want to make to the rules. Add these inside the "rules" section of eslint config.

#### Disable jsdoc requirement:

```javascript
"jsdoc/require-jsdoc": "off"
```
