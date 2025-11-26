<template>
  <BaseCard
    :colors="{badge: project.badge?.color, bg: project.backgroundColor, border: project.borderColor}"
    :badge="project.badge?.text"
    :title="project.name"
    :body-paragraph="project.description"
    :initial-is-open="initialIsOpen"
  >
    <BaseHeading v-if="project.websites" :heading="'Websites'">
      <div class="text-slate-600 mb-5">
        <ul class="list-disc list-inside text-blue-500">
          <li v-for="(website, index) in project.websites" :key="index"><a :href="website" class="hover:underline">{{ website }}</a></li>
        </ul>
      </div>
    </BaseHeading>
    <BaseHeading v-if="project.stacks" :heading="'Used Stacks'">
      <div class="text-slate-600 mb-5">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(stack, index) in project.stacks"
            :key="index"
            class="px-2 py-1 rounded text-sm font-medium text-white bg-gray-500"
          >
            {{ stack }}
          </span>
        </div>
      </div>
    </BaseHeading>
  </BaseCard>
</template>

<script setup lang="ts">
import type { PersonalProject } from '~/types';

defineProps<{
  project: PersonalProject;
  initialIsOpen?: boolean;
}>();
</script>
