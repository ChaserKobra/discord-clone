<script setup lang="ts">
// const isDark = useDark()
// const toggleDark = useToggle(isDark)

const modes = ['Light', 'Dark'] as const
const iconMap = {
  Light: 'i-lucide-sun',
  Dark: 'i-lucide-moon',
}
</script>

<template>
  <n-popover raw trigger="click" :show-arrow="false">
    <template #trigger>
      <button p="3" bg="indigo-500 hover:indigo-600" text="white" rounded="full">
        <div class="i-lucide-moon" />
      </button>
    </template>
    <ul flex="~ col" gap="1">
      <li v-for="mode in modes" :key="mode" flex="~ items-center" gap="5px" p="x-2 y-1" cursor="pointer" hover="bg-indigo-500 text-white">
        <div :class="iconMap[mode]" />
        {{ mode }}
      </li>
    </ul>
  </n-popover>
</template>
