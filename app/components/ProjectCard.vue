<template>
  <BaseCard
    :colors="{badge: project.badge?.color, bg: project.backgroundColor, border: project.borderColor}"
    :badge="project.badge?.text"
    :title="project.name"
    :body-paragraph="project.description"
    :initial-is-open="initialIsOpen"
  >
    <BaseHeadingText :heading="'Duration'" :text="`${project.startDate} - ${project.endDate}`" />
    <BaseHeadingLinks v-if="project.websites" :heading="'Websites'" :links="project.websites" />
    <BaseHeadingTags v-if="project.stacks" :heading="'Used Stacks'" :tags="project.stacks" />
  </BaseCard>
</template>

<script setup lang="ts">
import type { Project } from '~/types';

defineProps<{
  project: Project;
  initialIsOpen?: boolean;
}>();
</script>
