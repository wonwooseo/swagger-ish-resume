<template>
  <BaseCard
    :colors="{badge: education.badge?.color, bg: education.backgroundColor, border: education.borderColor}"
    :badge="education.badge?.text"
    :title="education.institution"
    :body-paragraph="education.description"
    :initial-is-open="initialIsOpen"
  >
    <BaseHeading :heading="'Degree'">
      <div class="text-slate-600 mb-5">{{ education.degree }}</div>
    </BaseHeading>
    <BaseHeading :heading="'GPA'">
      <div class="text-slate-600 mb-5">{{ education.gpa }}</div>
    </BaseHeading>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Education } from '~/types';

defineProps<{
  education: Education;
  initialIsOpen?: boolean;
}>();
</script>
