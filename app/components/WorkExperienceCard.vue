<template>
  <BaseCard
    :colors="colors"
    :badge="workExperience.endDate ? workExperience.endDate : 'Present'"
    :title="workExperience.company"
    :bodyParagraph="workExperience.description"
    :initialIsOpen="initialIsOpen"
  >
    <BaseHeadingText :heading="'Position'" :text="workExperience.position" />
    <BaseHeadingText :heading="'Dates of Employment'" :text="`${workExperience.startDate} - ${workExperience.endDate ? workExperience.endDate : 'Present'}`" />
    <BaseHeadingText v-if="workExperience.location" :heading="'Location'" :text="workExperience.location" />
  </BaseCard>
</template>
  
<script setup lang="ts">
  import type { WorkExperience } from '~/types'

  const props = defineProps<{
    colors: {
      badge: string;
      bg: string;
      border: string;
      text: string;
    };
    workExperience: WorkExperience;
    initialIsOpen?: boolean;
  }>()
</script>