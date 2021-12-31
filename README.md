# eslint-plugin-lendi

Lendi eslint plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lendi`:

```
$ npm install eslint-plugin-lendi --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lendi` globally.

## Usage

Add `lendi-eslint-plugin` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "extends": [
        "plugin:lendi/standard"
    ]
}
```

## Changlog
`1.1.8`: add new spacing rules
`1.0.3`: add eslint `no-magic-numbers: ["error", { "enforceConst": true }]`

## How to push to npm
Just use `npm push`



