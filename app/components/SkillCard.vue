<template>
  <BaseCard
    :colors="colors"
    :badge="skill.category"
    :title="skill.name"
    :bodyParagraph="skill.description"
    :initialIsOpen="initialIsOpen"
  >
    <BaseHeadingText :heading="'Level'" :text="skill.level" />
  </BaseCard>
</template>
  
<script setup lang="ts">
  import type { Skill } from '~/types'

  const props = defineProps<{
    colors: {
      badge: string;
      bg: string;
      border: string;
      text: string;
    };
    skill: Skill;
    initialIsOpen?: boolean;
  }>()
</script>