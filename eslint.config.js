import js from '@eslint/js';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

/**
 * DISABLED_TYPE_CHECK env cho phép tắt các rule hoặc config liên quan đến type check,
 * vì việc thực thi type check sẽ tốn nhiều thời gian.
 * https://typescript-eslint.io/troubleshooting/typed-linting/performance/#slow-typescript-types
 */

export default tseslint.config(
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['src/**/*.{ts,tsx}', 'scripts/**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                projectService:
                    process.env.DISABLED_TYPE_CHECK === 'true' ? false : true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            '@typescript-eslint/explicit-member-accessibility': 0,
            '@typescript-eslint/camelcase': 0,

            '@typescript-eslint/explicit-function-return-type': [0, {
                allowTypedFunctionExpressions: true,
            }],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    caughtErrors: 'none',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],

            'no-redeclare': 'off',
            '@typescript-eslint/no-redeclare': 'off',
            indent: 'off',
            // indent: ['error', 4],
            '@typescript-eslint/indent': 'off',
            quotes: ['error', 'single'],

            semi: ['error', 'always', {
                omitLastInOneLineBlock: true,
            }],

            'no-empty': 0,
            'no-irregular-whitespace': ['error', { skipComments: true, skipTemplates: true }],
            'no-useless-assignment': 0,
            'no-use-before-define': [0, {
                functions: false,
                classes: false,
                variables: false,
            }],
            'react-refresh/only-export-components': 'error',
        },
    },
);