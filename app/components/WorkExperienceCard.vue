<template>
  <BaseCard
    :colors="{badge: workExperience.badge?.color, bg: workExperience.backgroundColor, border: workExperience.borderColor}"
    :badge="workExperience.badge?.text"
    :title="workExperience.company"
    :body-paragraph="workExperience.description"
    :initial-is-open="initialIsOpen"
  >
    <BaseHeadingText :heading="'Position'" :text="workExperience.position" />
    <BaseHeadingText :heading="'Dates of Employment'" :text="`${workExperience.startDate} - ${workExperience.endDate ? workExperience.endDate : 'Present'}`" />
    <BaseHeadingText v-if="workExperience.location" :heading="'Location'" :text="workExperience.location" />
  </BaseCard>
</template>

<script setup lang="ts">
import type { WorkExperience } from '~/types';

defineProps<{
  workExperience: WorkExperience;
  initialIsOpen?: boolean;
}>();
</script>
