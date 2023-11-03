import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// plugins
import FiltersPlugin from 'windicss/plugin/filters'
import LineClamp from 'windicss/plugin/line-clamp'

export default defineConfig({
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './content/**/*.md',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
      './error.vue'
    ]
  },
  theme: {
    container: {
      center: true,
      padding: {
        sm: '1rem',
        md: '1rem',
        lg: '2rem',
        xl: '8.125rem',
      },
    },
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    }
  },
  shortcuts: {
    btn: 'cursor-pointer disabled:cursor-not-allowed px-5 py-2 rounded-lg font-semibold',
    'center-flex': 'flex justify-center items-center',
    'btn-outline': 'btn border border-white hover:(bg-white bg-opacity-20)',
  },
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    LineClamp as Plugin,
  ] as Plugin[]
})
