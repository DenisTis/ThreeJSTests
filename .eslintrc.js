module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty": "warn",
    "no-ex-assign": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-jsdoc": ["error", { "requireReturn": false }],
    "valid-typeof": "error",
    "array-callback-return": "warn",
    "block-scoped-var": "error",
    "class-methods-use-this": "warn",
    "complexity": ["error", { "max": 10 }],
    "consistent-return": "error",
    "curly": "error",
    "default-case": "warn",
    "dot-location": ["error", "property"],
    "dot-notation": "warn",
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-else-return": "warn",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "warn",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "warn",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    "no-with": "error",
    "radix": "error",
    "wrap-iife": "error",
    "yoda": "error",
    "strict": ["error", "global"],
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "warn",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-undefined": "error",
    "no-unused-vars": "error",
    "callback-return": "warn",
    "array-bracket-spacing": "warn",
    "brace-style": "warn",
    "camelcase": "warn",
    "comma-dangle": "error",
    "comma-style": "warn",
    "computed-property-spacing": "warn",
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "func-name-matching": "error",
    "func-style": ["warn", "declaration"],
    "id-length": ["error", {
      "min": 3,
      "exceptions": ["i", "j", "k", "id", "me", "go"]
    }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "key-spacing": "warn",
    "line-comment-position": "warn",
    "max-nested-callbacks": ["warn", { "max": 4 }],
    "max-statements-per-line": "error",
    "new-cap": ["warn", {
      "newIsCap": true,
      "capIsNew": false
    }],
    "new-parens": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": "warn",
    "no-negated-condition": "warn",
    "no-nested-ternary": "error",
    "no-tabs": "warn",
    "no-trailing-spaces": "warn",
    "no-underscore-dangle": "warn",
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "warn",
    "object-curly-newline": ["warn", {
      "ObjectPattern": {
        "multiline": true,
        "minProperties": 2
      }
    }],
    "object-property-newline": "warn",
    "one-var": ["error", "never"],
    "quotes": ["warn", "single"],
    "semi": "error",
    "wrap-regex": "error"

  }
};
