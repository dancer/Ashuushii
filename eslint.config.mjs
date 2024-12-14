import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from '@next/eslint-plugin-next'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      next: nextPlugin
    },
    rules: {
      'next/no-html-link-for-pages': 'off',
      'next/no-img-element': 'off',
      // Add any other rules you want to disable here
    }
  }
];

export default eslintConfig;
