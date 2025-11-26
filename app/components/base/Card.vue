<template>
  <div class="group">
    <!-- CARD HEADER -->
    <div
      class="border flex items-center justify-between px-2 py-2 cursor-pointer transition-all select-none"
      :class="[cardColors.bg, cardColors.border, isOpen ? 'rounded-t border' : 'rounded shadow-sm hover:shadow']"
      @click="toggle"
    >
      <div class="flex items-center">
        <!-- BADGE -->
        <div
          v-if="badge"
          class="w-24 text-center py-1 rounded text-sm font-bold text-white shrink-0 mr-4 shadow-sm"
          :class="cardColors.badge"
        >
          {{ badge }}
        </div>

        <!-- TITLE -->
        <div class="font-bold text-slate-700 text-base flex items-center gap-2">
          {{ title }}
        </div>
      </div>

      <div class="text-sm text-slate-500 group-hover:text-black flex items-center gap-2">
        <BaseChevron :is-section-open="!isOpen" />
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
      <div v-if="isOpen" class="border-x border-b rounded-b p-4 text-sm" :class="[cardColors.bg, cardColors.border]">
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
import { ref, computed } from 'vue';

const props = defineProps<{
  colors?: {
    badge?: string;
    bg?: string;
    border?: string;
  };
  badge?: string;
  title: string;
  bodyParagraph: string;
  initialIsOpen?: boolean;
}>();

// Computed to ensure colors are properly handled
const cardColors = computed(() => ({
  badge: props.colors?.badge || 'bg-blue-600',
  bg: props.colors?.bg || 'bg-blue-50/50',
  border: props.colors?.border || 'border-blue-200',
}));

// Internal state for the accordion
const isOpen = ref(props.initialIsOpen || false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
