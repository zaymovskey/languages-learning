// @ts-check
import eslint from '@eslint/js';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: {
      'no-unused-vars': 'off',
      ...hooksPlugin.configs.recommended.rules,
    },
  }
);
