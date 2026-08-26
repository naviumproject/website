import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:  ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        
        'light-text': '#0f0f0f',
        'light-background': '#9FEDD7',
        'light-background-secondary': '#89D6AD',
        'light-primary': '#919F61',
        'light-secondary': '#D0B856',
        'light-accent': '#D0B856',
        'dark-text': '#f0f0f0',
        'dark-background': '#919F61',
        'dark-background-secondary': '#89D6AD',
        'dark-primary': '#9FEDD7',
        'dark-secondary': '#D0B856',
        'dark-accent': '#9FEDD7',
      },
      fontFamily:{
        "display":"Unbounded Variable",
        "text":"Inter Variable",
      }
      
    },
  },
  plugins: [],
}
export default config
