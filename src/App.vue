<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme } from 'naive-ui'

const isDark = useDark()

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'indigo',
  },
  Button: {
    textColor: 'red',
  },
}
</script>

<template>
  <n-config-provider
    class="wh-full"
    :theme="isDark ? darkTheme : undefined"
    :theme-overrides="themeOverrides"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </n-config-provider>
</template>
