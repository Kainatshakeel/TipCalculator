import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        spaceMono: ['Space Mono', 'monospace'],
      },
      fontSize: {
        'input': '24px', 
      },
      screens: {
        sm: '375px',  
        lg: '1440px', 
      },
    },
  },
 
  plugins: [],
} satisfies Config;
