<template>
  <BaseCard
    :colors="{badge: education.badge?.color, bg: education.backgroundColor, border: education.borderColor}"
    :badge="education.badge?.text"
    :title="education.institution"
    :body-paragraph="education.description"
    :initial-is-open="initialIsOpen"
  >
    <BaseHeadingText :heading="'Degree'" :text="education.degree" />
    <BaseHeadingText :heading="'GPA'" :text="education.gpa" />
  </BaseCard>
</template>

<script setup lang="ts">
import type { Education } from '~/types';

defineProps<{
  education: Education;
  initialIsOpen?: boolean;
}>();
</script>
