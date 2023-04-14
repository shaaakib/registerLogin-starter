/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5826ff',

          secondary: '#85f7b8',

          accent: '#ff6399',

          neutral: '#221A28',

          'base-100': '#FFFFFF',

          info: '#58B5CA',

          success: '#58E4B1',

          warning: '#F0B056',

          error: '#E86354',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
