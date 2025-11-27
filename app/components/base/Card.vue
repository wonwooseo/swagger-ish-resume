<template>
  <div class="group">
    <!-- CARD HEADER -->
    <div
      class="border flex items-center justify-between px-2 py-2 cursor-pointer transition-all select-none"
      :class="[cardConfig.bg, cardConfig.border, isOpen ? 'rounded-t border' : 'rounded shadow-sm hover:shadow']"
      @click="toggle"
    >
      <div class="flex items-center">
        <!-- BADGE -->
        <div
          class="w-20 text-center py-1 rounded text-sm font-bold text-white shrink-0 mr-4 shadow-sm"
          :class="cardConfig.badge.color"
        >
          {{ cardConfig.badge.text }}
        </div>

        <!-- TITLE -->
        <div class="font-bold text-slate-700 text-base flex items-center gap-2">
          {{ title }}
        </div>

        <!-- SUMMARY -->
        <div v-if="summary" class="ml-4 text-sm text-slate-500">
          {{ summary }}
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
      <div v-if="isOpen" class="border-x border-b rounded-b text-sm" :class="[cardConfig.bg, cardConfig.border]">
        <div v-if="description" class="mb-6 text-slate-700">
          {{ description }}
        </div>
        <!-- Inject card contents here -->
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  config?: {
    bg?: string;
    border?: string;
    badge?: {
      color: string;
      text: string;
    }
  };
  title: string;
  summary?: string;
  description?: string;
  initialIsOpen?: boolean;
}>();

// Computed for card defaults
const cardConfig = computed(() => ({
  bg: props.config?.bg || 'bg-blue-50/50',
  border: props.config?.border || 'border-blue-200',
  badge: {
    color: props.config?.badge?.color || 'bg-blue-600',
    text: props.config?.badge?.text || 'GET',
  }
}));

// Internal state for the accordion
const isOpen = ref(props.initialIsOpen || false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>
