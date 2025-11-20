<template>
  <BaseCard
    :colors="colors"
    :badge="project.category"
    :title="project.name"
    :bodyParagraph="project.description"
    :initialIsOpen="initialIsOpen"
  >
    <BaseHeadingText :heading="'Duration'" :text="`${project.startDate} - ${project.endDate ? project.endDate : 'Present'}`" />
    <BaseHeadingLinks v-if="project.links" :heading="'Links'" :links="project.links" />
    <BaseHeadingTags v-if="project.stacks" :heading="'Related Stacks'" :tags="project.stacks" />
  </BaseCard>
</template>
  
<script setup lang="ts">
  import type { Project } from '~/types'

  const props = defineProps<{
    colors: {
      badge: string;
      bg: string;
      border: string;
      text: string;
    };
    project: Project;
    initialIsOpen?: boolean;
  }>()
</script>