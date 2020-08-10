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

Add `lendi-eslint-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-lendi` prefix:

```json
{
    "plugins": [
        "lendi-eslint-plugin"
    ]
}
```

## Changlog
`1.0.3`: add eslint `no-magic-numbers: ["error", { "enforceConst": true }]`





