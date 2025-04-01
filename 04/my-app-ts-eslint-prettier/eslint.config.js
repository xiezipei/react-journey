import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  // 配置适用于所有 JavaScript 和 TypeScript 文件
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

  // 配置适用于所有 JavaScript 和 TypeScript 文件，并设置全局变量为浏览器环境
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },

  // 配置适用于所有 JavaScript 和 TypeScript 文件，使用 JavaScript 推荐的规则集
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },

  // 使用 TypeScript 推荐的 ESLint 配置
  tseslint.configs.recommended,

  // 使用 React 推荐的扁平化配置
  pluginReact.configs.flat.recommended,

  // 设置 React 相关配置，自动检测 React 版本
  {
    settings: {
      react: {
        version: 'detect', // 自动检测 React 版本
      },
    },
  },

  // 配置适用于所有 JavaScript 和 TypeScript 文件，使用 Prettier 插件和相关规则
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      prettier, // 使用 Prettier 插件
    },
    rules: {
      'prettier/prettier': ['error', { semi: false }], // 使用 Prettier 格式化规则，禁用分号
      'no-unused-vars': 'error', // 禁止未使用的变量
      '@typescript-eslint/no-unused-vars': 'error', // 禁止 TypeScript 中未使用的变量
      semi: ['error', 'never'], // 禁用分号
    },
  },
])
