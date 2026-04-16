import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#959ea5',
        'primary-dark': '#7a7f86',
        'primary-light': '#a8adb5',
      },
    },
  },
  plugins: [],
}
export default config
