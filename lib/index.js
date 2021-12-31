module.exports = {
  configs: {
    standard: {
      plugins: ["lendi"],
      rules: {
        "indent": ["error", 2],
        "import/no-unresolved": "off",
        "strict": "off",
        "no-console": [1, { allow: ["warn", "error"] }],
        'key-spacing': ['error', { beforeColon: false, },],
        '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true, },],
        "no-extra-semi": "off",
        "no-underscore-dangle": "off",
        "no-undef": "off",
        "no-use-before-define": "off",
        "vue/custom-event-name-casing": "off",
        "no-case-declarations": "off",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "space-before-function-paren": ["error", "never"],
        "semi": ["error", "always", {
          "omitLastInOneLineBlock": true
        }],
        "use-isnan": ["error"],
        "comma-dangle": ["error", {
          "arrays": "always",
          "objects": "always",
          "imports": "never",
          "exports": "never",
          "functions": "ignore"
        }],
        'object-curly-spacing': 'off',
        'no-unused-vars': 'off',
        'comma-spacing': 'off',
        'array-bracket-spacing': 'off',
        'no-prototype-builtins': 'off',
        'camelcase': 'off',
        'new-cap': 'off',
        'no-unused-expressions': 'off',
        'no-constant-condition': 'off',
        'no-redeclare': 'off',
        'max-len': 'off',
        'vue/max-len': [
          'error',
          {
            'code': 120,
            'template': 160,
            'tabWidth': 2,
            'comments': 120,
            'ignorePattern': '',
            'ignoreComments': true,
            'ignoreTrailingComments': true,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true,
            'ignoreHTMLAttributeValues': false,
            'ignoreHTMLTextContents': true,
          },
        ],
      },
      extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript',
        'eslint:recommended',
      ],
    }
  }
};
