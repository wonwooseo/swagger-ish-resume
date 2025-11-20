<template>
  <div class="group">
    <!-- CARD HEADER -->
    <div 
      @click="toggle"
      class="border flex items-center justify-between px-2 py-2 cursor-pointer transition-all select-none"
      :class="[colors.bg, colors.border, isOpen ? 'rounded-t border-b-0' : 'rounded shadow-sm hover:shadow']"
    >
      <div class="flex items-center">
        <!-- BADGE -->
        <div 
          class="w-20 text-center py-1 rounded text-sm font-bold text-white shrink-0 mr-4 shadow-sm"
          :class="colors.badge"
        >
          {{ badge }}
        </div>

        <!-- TITLE -->
        <div class="font-bold text-slate-700 text-base flex items-center gap-2">
          {{ title }}
        </div>
      </div>

      <div class="text-sm text-slate-500 group-hover:text-black flex items-center gap-2">
        <BaseChevron :isSectionOpen="!isOpen" />
      </div>
    </div>

    <!-- CARD BODY (Collapsible) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-x border-b rounded-b p-4 text-sm" :class="[colors.bg, colors.border]">
        <div class="mb-6 text-slate-700">
          {{ bodyParagraph }}
        </div>
        <!-- Inject card contents here -->
        <slot/>
      </div>
    </transition>
  </div>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps<{
    colors: {
      badge: string;
      bg: string;
      border: string;
      text: string;
    };
    badge: string;
    title: string;
    bodyParagraph: string;
    initialIsOpen?: boolean;
  }>()

  // Internal state for the accordion
  const isOpen = ref(props.initialIsOpen || false)
  
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
</script>