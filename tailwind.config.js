/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // gray-300
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // green-800
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        primary: {
          DEFAULT: 'var(--color-primary)', // green-800
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // light-green-800
          foreground: 'var(--color-secondary-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-700
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)' // gray-600
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // amber-600
          foreground: 'var(--color-accent-foreground)' // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-700
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // orange-600
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-700
          foreground: 'var(--color-error-foreground)' // white
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }]
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      borderRadius: {
        lg: '8px',
        md: '6px',
        sm: '4px'
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'form': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 8px rgba(0, 0, 0, 0.1)'
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms'
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}