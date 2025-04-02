/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true, // 确保 Tailwind 的样式优先级高于其他样式
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的默认样式，避免与 Ant Design 冲突
  },
};
