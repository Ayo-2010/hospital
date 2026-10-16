// @ts-check
import { existsSync } from 'fs'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { getDefaultAttributes } from 'eslint-plugin-better-tailwindcss/api/defaults'

const withNuxt = existsSync('./.nuxt/eslint.config.mjs')
  ? await import('./.nuxt/eslint.config.mjs').then(m => m.default)
  : (config) => config

export default withNuxt(
  { ignores: ['.output/**'] },
  betterTailwindcss.configs['correctness-error'],
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
        attributes: [
          ...getDefaultAttributes(),
          ['^v-bind:ui$', [{ match: 'objectValues' }]]
        ]
      }
    }
  }
)