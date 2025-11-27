<template>
  <div class="mb-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <span class="font-bold text-slate-700"><i>{{ heading }}</i></span>
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