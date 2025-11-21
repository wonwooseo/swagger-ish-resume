<template>
  <div class="mb-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <span class="font-bold text-slate-700">{{ heading }}</span>
    </div>
  </div>
  <div class="text-slate-600 mb-5">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps<{
    heading: string;
    text: string;
  }>();
</script>
