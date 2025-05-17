import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['SourceSansPro', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0B5FFF',
					foreground: '#FFFFFF',
					50: '#F0F5FF',
					100: '#D6E4FF',
					200: '#A3C3FF',
					300: '#70A1FF',
					400: '#3D80FF',
					500: '#0B5FFF',
					600: '#004AD6',
					700: '#0038A3',
					800: '#002770',
				},
				cyan: {
					DEFAULT: '#2EB7FF',
					50: '#F0FAFF',
					100: '#C7ECFF',
					200: '#94DAFF',
					300: '#5FC8FF',
					400: '#2EB7FF',
					500: '#00A4FA',
					600: '#0083C7',
					700: '#006194',
				},
				indigo: {
					DEFAULT: '#0F28FF',
					50: '#DBDFFF',
					100: '#A8B1FF',
					200: '#7785FF',
					300: '#4256FF',
					400: '#0F28FF',
					500: '#0017D8',
					600: '#0011A8',
					700: '#000C75',
					800: '#000742',
					900: '#00072B',
				},
				purple: {
					DEFAULT: '#7414FF',
					50: '#EDE0FF',
					100: '#CFADFF',
					200: '#AF78FF',
					300: '#9247FF',
					400: '#7414FF',
					500: '#5B00E0',
					600: '#4700AD',
					700: '#32007A',
				},
				secondary: {
					DEFAULT: '#6B6C7E',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#FF2E2E',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				dark: '#272833',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;