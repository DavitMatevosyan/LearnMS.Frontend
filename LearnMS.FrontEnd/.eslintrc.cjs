module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',

  plugins: [
    "import",
    "@typescript-eslint",
    ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],

  plugins: ['react-refresh', 'import'],
  rules: {
    "react/react-in-jsx-scope": "off",

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/quotes": ["warn", "double", { avoidEscape: true }],
    "@typescript-eslint/brace-style": ["warn", "stroustrup", { allowSingleLine: true }],
    "comma-style": "warn", 
    "@typescript-eslint/comma-dangle": "warn",
    "no-unexpected-multiline": "error",
    "no-sequences": ["error", { "allowInParentheses": false }],
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/semi": "warn",
    "arrow-body-style": ["warn", "as-needed"], // omit block for single expression (like `() => true` over `() => { return true; }`)
    "arrow-parens": ["warn", "as-needed"],     // omit parentheses for single argument (like `p => true` over `(p) => true`)
    "no-extra-bind": "warn",                   // don't use .bind(...) unnnecessarily
    //"no-useless-call": "warn",               // don't use .apply(...) or .call(...) unnecessarily
    "prefer-arrow-callback": [                 // prefer arrow functions over inline function declarations (like `filter(p => true)` instead of `filter(function(p) { return true; })`)
        "warn",
        { allowUnboundThis: true } // TODO: set to false when we fix the last functions with `this` rebinding
    ],

    // enforce TypeScript style
    "@typescript-eslint/no-array-constructor": "error", // array literals (like `[]` instead of `new Array<T>()`); use error since rule doesn't support auto-fix
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "array-bracket-spacing": "warn",         // inside [] for arrays like [a, b, c]
    "computed-property-spacing": "warn",     // inside [] for computed properties like a[b]
    "no-irregular-whitespace": "warn",       // no special space characters (e.g. zero-width space)
    "no-trailing-spaces": "warn",            // at end of line
    "no-whitespace-before-property": "warn", // before property access like 'a.b'
    "rest-spread-spacing": "warn",           // around '...' spread operator
    "space-in-parens": "warn",               // inside ()
    "@typescript-eslint/func-call-spacing": "warn",              // between function names and invocations
    "@typescript-eslint/space-before-function-paren": ["warn", { // before function parenthesis
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
    }],
    "arrow-spacing": "warn",                     // around arrow operator
    "block-spacing": "warn",                     // consistent after open and before close block
    "generator-star-spacing": "warn",            // after generator * like `function* generator`
    "key-spacing": "warn",                       // around object key :
    "semi-spacing": "warn",                      // none before semicolons, and one after unless end of line
    "space-unary-ops": "warn",                   // around unary operators like '++1', '-1', or 'typeof x'
    "spaced-comment": [                          // before first character in comments
        "warn",
        "always",
        {
            markers: ["/"],
            exceptions: ["*"],
            block: {
                balanced: true
            }
        }
    ],
    "switch-colon-spacing": "warn",              // around colons of switch statements
    "@typescript-eslint/comma-spacing": "warn",                    // around commas
    "@typescript-eslint/keyword-spacing": "warn",                  // around keywords
    "@typescript-eslint/object-curly-spacing": ["warn", "always"], // inside object {}
    "@typescript-eslint/space-before-blocks": "warn",              // before blocks
    "@typescript-eslint/space-infix-ops": "warn",                  // around infix operators like '1 + 1'
    "@typescript-eslint/type-annotation-spacing": "warn",          // around type annotations

    // enforce blank lines
    "eol-last": ["warn", "always"],                                  // at end of file
    "import/newline-after-import": ["warn", {"count": 1}],                           // after imports
    "function-call-argument-newline": ["error", "consistent"],       // consistent for function call

    // forbid blank lines
    "padded-blocks": ["warn", "never"], // padded blocks (blank line after '{' or before '}')

    // forbid multiple consecutive spaces or empty lines
    "no-multi-spaces": [
        "warn",
        {
            "ignoreEOLComments": true
        }
    ],
    "no-multiple-empty-lines": [
        "warn",
        {
            max: 1,
            maxBOF: 0,
            maxEOF: 0
        }
    ]
  },
}
