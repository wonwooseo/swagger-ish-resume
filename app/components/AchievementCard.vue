<template>
  <div class="group mb-5">
    <!-- CARD HEADER -->
    <div
      class="border flex items-center justify-between px-2 py-2 cursor-pointer transition-all select-none"
      :class="[cardColors.bg, cardColors.border, isOpen ? 'rounded-t border' : 'rounded']"
      @click="toggle"
    >
      <div class="flex items-center">
        <!-- TITLE -->
        <div class="font-bold text-slate-700 text-sm flex items-center gap-2">
          {{ achievement.name }}
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
        <div class="mb-5 text-slate-700">
          <ul class="list-disc list-inside">
            <li v-for="(desc, index) in achievement.description">{{ desc }}</li>
          </ul>
        </div>
        <BaseHeading :heading="'Used Stacks'">
          <div class="text-slate-600 mb-5">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(stack, index) in achievement.stacks"
                :key="index"
                class="px-2 py-1 rounded text-sm font-medium text-white bg-gray-500"
              >
                {{ stack }}
              </span>
            </div>
          </div>
        </BaseHeading>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Achievement } from '~/types';

const props = defineProps<{
  colors?: {
    bg?: string;
    border?: string;
  };
  achievement: Achievement;
  initialIsOpen?: boolean;
}>();

// Computed to ensure colors are properly handled
const cardColors = computed(() => ({
  bg: props.colors?.bg || 'bg-blue-50/50',
  border: props.colors?.border || 'border-blue-200',
}));

// Internal state for the accordion
const isOpen = ref(props.initialIsOpen || false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
