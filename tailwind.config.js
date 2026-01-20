/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}' ,
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",    
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-300 */
        input: "var(--color-input)", /* gray-300 */
        ring: "var(--color-ring)", /* deep-orange-800 */
        background: "var(--color-background)", /* gray-50 */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep-orange-800 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* blue-800 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-700 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-100 */
          foreground: "var(--color-muted-foreground)", /* gray-600 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* green-800 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-700 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* orange-700 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-700 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        brand: {
          orange: "var(--color-brand-orange)", /* orange-600 */
          blue: "var(--color-brand-blue)", /* blue-600 */
          conversion: "var(--color-conversion)", /* orange-500 */
          trust: "var(--color-trust)", /* blue-900 */
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        kalam: ['Kalam', 'cursive'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right bottom",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeIn: "fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0,0,0,0.1)',
        'elevated': '0 8px 24px rgba(0,0,0,0.15)',
        'premium': '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
