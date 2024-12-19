/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primaryGreen: {
          DEFAULT: '#064E34',
          foreground: 'hsl(var(--primaryGreen-foreground))',
        },
        lightGreen: {
          DEFAULT: '#4CB944',
          foreground: 'hsl(var(--lightGreen-foreground))',
        },
        secondary: {
          DEFAULT: '#246EB9',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        whiteColor: {
          DEFAULT: '#FDFFFC',
          foreground: 'hsl(var(--whiteColor-foreground))',
        },
        tomato: {
          DEFAULT: '#F06543',
          foreground: 'hsl(var(--tomato-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        bgGreenGradient: 'linear-gradient(to bottom, #064E3B, #047857, #0D9488)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
