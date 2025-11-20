<template>
  <BaseCard
    :colors="colors"
    :badge="education.degree"
    :title="education.school"
    :bodyParagraph="education.description"
    :initialIsOpen="initialIsOpen"
  >
    <BaseHeadingText :heading="'Field of Study'" :text="education.fieldOfStudy" />
    <BaseHeadingText :heading="'GPA'" :text="education.gpa" />
  </BaseCard>
</template>

<script setup lang="ts">
  import type { Education } from '~/types'

  const props = defineProps<{
    colors: {
      badge: string;
      bg: string;
      border: string;
      text: string;
    };
    education: Education;
    initialIsOpen?: boolean;
  }>()
</script>