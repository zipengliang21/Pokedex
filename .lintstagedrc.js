module.exports = {
    './src/**/*.ts': [
        'prettier --config ./.prettierrc.json --check', 
        'eslint --no-error-on-unmatched-pattern'
    ],
    './test/**/*.ts': [
        'prettier --config ./.prettierrc.json --check', 
        'eslint --no-error-on-unmatched-pattern'
    ]
};