<template>
  <BaseCard
    :title="'/education/{institution}'"
    :initial-is-open="initialIsOpen"
  >
    <BaseDropdown
      :options="educationList"
      :option-display-attribute="'institution'"
      heading="Institution"
      v-model="selectedEducation"
    />
    <BaseHeading :heading="'Degree'">
      <div class="text-slate-700 mb-5 p-3">{{ selectedEducation?.degree }}</div>
    </BaseHeading>
    <BaseHeading :heading="'GPA'">
      <div class="text-slate-700 mb-5 p-3">{{ selectedEducation?.gpa }}</div>
    </BaseHeading>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Education } from '~/types';

const props = defineProps<{
  educationList: Education[];
  initialIsOpen?: boolean;
}>();

const selectedEducation = ref(props.educationList[0] ? props.educationList[0] : null);
</script>
