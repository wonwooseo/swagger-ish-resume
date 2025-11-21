<template>
  <BaseCard
    :colors="{badge: skill.badge?.color, bg: skill.backgroundColor, border: skill.borderColor}"
    :badge="skill.badge?.text"
    :title="skill.name"
    :body-paragraph="skill.description"
    :initial-is-open="initialIsOpen"
  />
</template>

<script setup lang="ts">
import type { Skill } from '~/types';

defineProps<{
  skill: Skill;
  initialIsOpen?: boolean;
}>();
</script>
