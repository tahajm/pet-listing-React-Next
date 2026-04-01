import json from '@eslint/json';
import nextPlugin from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vitest from '@vitest/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import compat from 'eslint-plugin-compat';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '**/node_modules',
    '**/dist',
    '**/build',
    '**/lib',
    '**/cjs',
    '**/esm',
    '**/umd',
    '!.vscode',
    '**/coverage',
    '**/.next',
  ]),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11Y,
      '@typescript-eslint': typescriptEslint,
      '@next/next': nextPlugin,
      'jsx-a11y': jsxA11Y,
      compat,
      prettier,
      json,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },

    settings: {
      'import/extensions': ['.ts', '.tsx', '.js'],

      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.ts', '.tsx'],
        },

        typescript: {
          project: ['tsconfig.json'],
        },
      },
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...jsxA11Y.configs.recommended.rules,
      ...json.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: false,
        },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      '@next/next/no-html-link-for-pages': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.test.*'],
    ...vitest.configs.recommended,
    plugins: {
      vitest,
    },
  },
]);