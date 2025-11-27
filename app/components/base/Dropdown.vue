<template>
  <BaseHeading :heading="heading">
    <div class="mb-5 p-3">
      <select
        v-model="selected"
        class="w-max p-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-gray-500"
      >
        <option v-for="(opt, index) in options" :key="index" :value="opt">
          {{ opt[optionDisplayAttribute] }}
        </option>
      </select>
    </div>
  </BaseHeading>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
const props = defineProps<{
  heading: string;
  options: T[];
  optionDisplayAttribute: keyof T;
  modelValue: T | null;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: T | null): void;
}>();

const selected = computed<T | null>({
  get: () => props.modelValue ?? null,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>