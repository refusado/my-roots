import type { Config } from 'tailwindcss';
import {
  fontFamily as defaultFontFamily,
  screens as defaultScreens,
} from 'tailwindcss/defaultTheme';
import { grass, grassDark, grassA, grassDarkA } from '@radix-ui/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultScreens,
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultFontFamily.sans],
      },
      aspectRatio: {
        square: '1 / 1',
        standard: '4 / 3',
        photo: '3 / 2',
        wide: '16 / 9',
        ultra: '21 / 9',
        'portrait-standard': '3 / 4',
        'portrait-photo': '2 / 3',
        'portrait-wide': '9 / 16',
        'portrait-ultra': '9 / 21',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('/hero-bg.jpg')",
      },
      colors: {
        ...grass,
        dark: grassDark,
        ...grassA,
        darkA: grassDarkA,
      },
    },
  },
} satisfies Config;
