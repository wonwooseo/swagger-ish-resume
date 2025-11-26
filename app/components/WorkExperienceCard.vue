<template>
  <BaseCard
    :colors="{badge: workExperience.badge?.color, bg: workExperience.backgroundColor, border: workExperience.borderColor}"
    :badge="workExperience.badge?.text"
    :title="workExperience.company"
    :body-paragraph="workExperience.description"
    :initial-is-open="initialIsOpen"
  >
    <BaseHeading :heading="'Position'">
      <div class="text-slate-600 mb-5">{{ workExperience.position }}</div>
    </BaseHeading>
    <BaseHeading v-if="workExperience.location" :heading="'Location'">
      <div class="text-slate-600 mb-5">{{ workExperience.location }}</div>
    </BaseHeading>
    <BaseHeading :heading="'Achievements'">
      <AchievementCard
        v-if="workExperience.achievements"
        v-for="(achievement, index) in workExperience.achievements"
        :key="index"
        :colors="{bg: workExperience.backgroundColor, border: workExperience.borderColor}"
        :achievement="achievement"
        :initial-is-open="initialIsOpen" />
    </BaseHeading>
</BaseCard>
</template>

<script setup lang="ts">
import type { WorkExperience } from '~/types';

defineProps<{
  workExperience: WorkExperience;
  initialIsOpen?: boolean;
}>();
</script>
