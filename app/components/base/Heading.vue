<template>
  <div class="mb-2 p-3 flex items-center justify-between bg-white">
    <div class="flex items-center gap-2">
      <span class="font-bold text-slate-700">{{ heading }}</span>
    </div>
  </div>
  <!-- inject content here -->
  <slot/>
</template>

<script setup lang="ts">
defineProps<{
  heading: string;
}>();
</script>
