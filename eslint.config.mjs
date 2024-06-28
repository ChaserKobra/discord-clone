import { antfu } from '@antfu/eslint-config'

export default antfu({
  settings: {
    'import/core-modules': ['vue-router/auto-routes'],
  },
  rules: {
    'antfu/top-level-function': 'off',
  },
})
