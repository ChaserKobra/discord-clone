import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify()],
  content: {
    pipeline: {
      include: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'],
    },
  },
})
