// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import stylistic from '@stylistic/eslint-plugin';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript'), {
  ignores: [
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'vitest.config.mts',
  ],
}, {
  rules: {
    'indent': 'off',
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'object-curly-spacing': ['error', 'always']
  },
}, 
...storybook.configs['flat/recommended'],
{
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    '@stylistic/indent': ['warn', 2],
  },
}];

export default eslintConfig;
