<template>
  <div class="mb-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <span class="font-bold text-slate-700">{{ heading }}</span>
    </div>
  </div>
  <div class="text-slate-600 mb-5">
    <ul class="list-disc list-inside space-y-1">
      <li v-for="(link, index) in links" :key="index"><a :href="link">{{ link }}</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    heading: string;
    links: string[];
  }>()
</script>