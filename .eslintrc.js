module.exports = exports = {
    env: {
        es2021: true,
        'react/react': true,
    },

    parseer: '@typescript-es-lint/parser',

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },

    plugins: ['@typescript-eslint', 'react'],

    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recomended'],
    // overrides: [
    //     {
    //         files: ['tsconfig.json'],
    //     },
    // ],
    rules: {
        // Possible Errors (overrides from recommended set)
        // 'no-extra-parens': ERROR,
        // 'no-unexpected-multiline': ERROR,
        // // All JSDoc comments must be valid
        // 'valid-jsdoc': [
        //     ERROR,
        //     {
        //         requireReturn: false,
        //         requireReturnDescription: false,
        //         requireParamDescription: true,
        //         prefer: {
        //             return: 'returns',
        //         },
        //     },
        // ],

        // // Best Practices

        // // Allowed a getter without setter, but all setters require getters
        // 'accessor-pairs': [
        //     ERROR,
        //     {
        //         getWithoutSet: false,
        //         setWithoutGet: true,
        //     },
        // ],
        // 'block-scoped-var': ERROR,
        // 'consistent-return': ERROR,
        // curly: ERROR,
        // 'default-case': ERROR,
        // // the dot goes with the property when doing multiline
        // 'dot-location': [ERROR, 'property'],
        // 'dot-notation': ERROR,
        // eqeqeq: [ERROR, 'smart'],
        // 'guard-for-in': ERROR,
        // 'no-alert': ERROR,
        // 'no-caller': ERROR,
        // 'no-case-declarations': ERROR,
        // 'no-div-regex': ERROR,
        // 'no-else-return': ERROR,
        // 'no-empty-label': ERROR,
        // 'no-empty-pattern': ERROR,
        // 'no-eq-null': ERROR,
        // 'no-eval': ERROR,
        // 'no-extend-native': ERROR,
        // 'no-extra-bind': ERROR,
        // 'no-floating-decimal': ERROR,
        // 'no-implicit-coercion': [
        //     ERROR,
        //     {
        //         boolean: true,
        //         number: true,
        //         string: true,
        //     },
        // ],
        // 'no-implied-eval': ERROR,
        // 'no-invalid-this': ERROR,
        // 'no-iterator': ERROR,
        // 'no-labels': ERROR,
        // 'no-lone-blocks': ERROR,
        // 'no-loop-func': ERROR,
        // 'no-magic-numbers': ERROR,
        // 'no-multi-spaces': ERROR,
        // 'no-multi-str': ERROR,
        // 'no-native-reassign': ERROR,
        // 'no-new-func': ERROR,
        // 'no-new-wrappers': ERROR,
        // 'no-new': ERROR,
        // 'no-octal-escape': ERROR,
        // 'no-param-reassign': ERROR,
        // 'no-process-env': ERROR,
        // 'no-proto': ERROR,
        // 'no-redeclare': ERROR,
        // 'no-return-assign': ERROR,
        // 'no-script-url': ERROR,
        // 'no-self-compare': ERROR,
        // 'no-throw-literal': ERROR,
        // 'no-unused-expressions': ERROR,
        // 'no-useless-call': ERROR,
        // 'no-useless-concat': ERROR,
        // 'no-void': ERROR,
        // // Produce warnings when something is commented as TODO or FIXME
        // 'no-warning-comments': [
        //     ERROR,
        //     {
        //         terms: ['TODO', 'FIXME'],
        //         location: 'start',
        //     },
        // ],
        // 'no-with': ERROR,
        // radix: ERROR,
        // 'vars-on-top': ERROR,
        // // Enforces the style of wrapped functions
        // 'wrap-iife': [ERROR, 'outside'],
        // yoda: ERROR,

        // // Strict Mode - for ES6, never use strict.
        // strict: [ERROR, 'never'],

        // // Variables
        // 'init-declarations': [ERROR, 'always'],
        // 'no-catch-shadow': ERROR,
        // 'no-delete-var': ERROR,
        // 'no-label-var': ERROR,
        // 'no-shadow-restricted-names': ERROR,
        // 'no-shadow': ERROR,
        // // We require all vars to be initialized (see init-declarations)
        // // If we NEED a var to be initialized to undefined, it needs to be explicit
        // 'no-undef-init': OFF,
        // 'no-undef': ERROR,
        // 'no-undefined': OFF,
        'no-unused-vars': ERROR,
        // // Disallow hoisting - let & const don't allow hoisting anyhow
        'no-use-before-define': ERROR,

        // // Node.js and CommonJS
        // 'callback-return': [ERROR, ['callback', 'next']],
        // 'global-require': ERROR,
        // 'handle-callback-err': ERROR,
        // 'no-mixed-requires': ERROR,
        // 'no-new-require': ERROR,
        // // Use path.concat instead
        // 'no-path-concat': ERROR,
        // 'no-process-exit': ERROR,
        // 'no-restricted-modules': OFF,
        // 'no-sync': ERROR,

        // // ECMAScript 6 support
        // 'arrow-body-style': [ERROR, 'always'],
        // 'arrow-parens': [ERROR, 'always'],
        // 'arrow-spacing': [ERROR, { before: true, after: true }],
        // 'constructor-super': ERROR,
        // 'generator-star-spacing': [ERROR, 'before'],
        // 'no-arrow-condition': ERROR,
        // 'no-class-assign': ERROR,
        // 'no-const-assign': ERROR,
        // 'no-dupe-class-members': ERROR,
        // 'no-this-before-super': ERROR,
        // 'no-var': ERROR,
        // 'object-shorthand': [ERROR, 'never'],
        'prefer-arrow-callback': ERROR,
        // 'prefer-spread': ERROR,
        // 'prefer-template': ERROR,
        // 'require-yield': ERROR,

        // // Stylistic - everything here is a warning because of style.
        // 'array-bracket-spacing': [ERROR, 'always'],
        // 'block-spacing': [ERROR, 'always'],
        // 'brace-style': [ERROR, '1tbs', { allowSingleLine: false }],
        // camelcase: ERROR,
        // 'comma-spacing': [ERROR, { before: false, after: true }],
        // 'comma-style': [ERROR, 'last'],
        // 'computed-property-spacing': [ERROR, 'never'],
        // 'consistent-this': [ERROR, 'self'],
        // 'eol-last': ERROR,
        // 'func-names': ERROR,
        // 'func-style': [ERROR, 'declaration'],
        // 'id-length': [ERROR, { min: 2, max: 32 }],
        // indent: [ERROR, 4],
        // 'jsx-quotes': [ERROR, 'prefer-double'],
        // 'linebreak-style': [ERROR, 'unix'],
        // 'lines-around-comment': [ERROR, { beforeBlockComment: true }],
        // 'max-depth': [ERROR, 8],
        // 'max-len': [ERROR, 132],
        // 'max-nested-callbacks': [ERROR, 8],
        // 'max-params': [ERROR, 8],
        // 'new-cap': ERROR,
        // 'new-parens': ERROR,
        // 'no-array-constructor': ERROR,
        // 'no-bitwise': OFF,
        // 'no-continue': OFF,
        // 'no-inline-comments': OFF,
        // 'no-lonely-if': ERROR,
        // 'no-mixed-spaces-and-tabs': ERROR,
        // 'no-multiple-empty-lines': ERROR,
        // 'no-negated-condition': OFF,
        'no-nested-ternary': ERROR,
        // 'no-new-object': ERROR,
        'no-plusplus': OFF,
        // 'no-spaced-func': ERROR,
        'no-ternary': ERROR,
        // 'no-trailing-spaces': ERROR,
        // 'no-underscore-dangle': ERROR,
        // 'no-unneeded-ternary': ERROR,
        // 'object-curly-spacing': [ERROR, 'always'],
        // 'one-var': OFF,
        // 'operator-assignment': [ERROR, 'never'],
        // 'operator-linebreak': [ERROR, 'after'],
        // 'padded-blocks': [ERROR, 'never'],
        // 'quote-props': [ERROR, 'consistent-as-needed'],
        // quotes: [ERROR, 'single'],
        // 'require-jsdoc': [
        //     ERROR,
        //     {
        //         require: {
        //             FunctionDeclaration: true,
        //             MethodDefinition: true,
        //             ClassDeclaration: false,
        //         },
        //     },
        // ],
        // 'semi-spacing': [ERROR, { before: false, after: true }],
        // semi: [ERROR, 'always'],
        // 'sort-vars': OFF,
        // 'space-after-keywords': [ERROR, 'always'],
        // 'space-before-blocks': [ERROR, 'always'],
        // 'space-before-function-paren': [ERROR, 'never'],
        // 'space-before-keywords': [ERROR, 'always'],
        // 'space-in-parens': [ERROR, 'never'],
        // 'space-infix-ops': [ERROR, { int32Hint: true }],
        // 'space-return-throw-case': ERROR,
        // 'space-unary-ops': ERROR,
        // 'spaced-comment': [ERROR, 'always'],
        // 'wrap-regex': ERROR,
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
}
