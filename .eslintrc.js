// prettier-ignore
module.exports = {
    'env': {
        'es6': true,
        'mocha': true,
        'node': true
    },
    'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 9,
        'sourceType': 'module'
    },
    'plugins': ['require-sort', 'simple-import-sort'],
    'rules': {
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {
            'argsIgnorePattern': '^(req|res|next)$'
        }],
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        'camelcase': 'error',
        'eqeqeq': 'error',
        'max-lines': ['warn', 200],
        'no-console': 'warn',
        'no-trailing-spaces': 'error',
        'no-unused-vars': ['error', {
            'argsIgnorePattern': '^(req|res|next)$'
        }],
        'no-useless-escape': 'off',
        'no-var': 'error',
        'require-await': 'error',
        'simple-import-sort/sort': 'error'
    }
};
