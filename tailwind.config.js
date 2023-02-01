/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/template/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        // 'blue': '#1fb6ff',
        'primary-0': '#f0efff',
        'primary-50': '#d8d6ff',
        'primary-100': '#c1beff',
        'primary-200': '#aaa5ff',
        'primary-300': '#938dff',
        'primary-400': '#7b74ff',
        'primary-500': '#645cff',
        'primary-600': '#554ed9',
        'primary-700': '#4640b3',
        'primary-800': '#37338c',
        'primary-900': ' #282566',
        'primary-1000': '#191740',
        'primary-1100': '#0a0919',
        'grey-0': '#fafbfc',
        'grey-50': '#f2f4f8',
        'grey-100': '#eaedf3',
        'grey-200': '#e2e7ef',
        'grey-300': '#dbe0ea',
        'grey-400': '#d3dae6',
        'grey-500': '#cbd3e1',
        'grey-600': '#adb3bf',
        'grey-700': '#8e949e',
        'grey-800': '#70747c',
        'grey-900': '#51545a',
        'grey-1000': '#333538',
        'grey-1100': '#141516',
        // 'black': '#222',
        'white': '#fff',
        'red-light': ' #f8d7da',
        'red-dark': '#842029',
        'green-light': '#d1e7dd',
        'green-dark': '#0f5132',
      },
    }
  },
  plugins: [],
}
