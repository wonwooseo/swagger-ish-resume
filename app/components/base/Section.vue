<template>
  <div class="mb-4">
    <!-- Section Header -->
    <div 
      class="border-b-2 border-gray-200 pb-2 mb-2 flex items-center justify-between cursor-pointer group select-none" 
      @click="isSectionOpen = !isSectionOpen"
    >
      <div class="flex items-baseline gap-3">
        <h2 class="text-2xl font-bold text-slate-700 group-hover:text-black">{{ title }}</h2>
        <p class="text-sm text-slate-500">{{ description }}</p>
      </div>
      
      <div class="text-sm text-slate-500 group-hover:text-black flex items-center gap-2">
        <BaseChevron :isSectionOpen="!isSectionOpen" />
      </div>
    </div>

    <!-- Collapsible Content Area -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isSectionOpen" class="space-y-3">
        <!-- Slots allow us to inject the cards here -->
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string;
  description: string;
}>()

const isSectionOpen = ref(true)
</script>
