<template>
  <BaseCard
    :title="'/project/{name}'"
    :initial-is-open="initialIsOpen"
  >
    <BaseDropdown
      :options="projectList"
      :option-display-attribute="'name'"
      heading="Name"
      v-model="selectedProject"
    />
    <BaseHeading :heading="'Description'">
      <div class="text-slate-700 mb-5 p-3">{{ selectedProject?.description }}</div>
    </BaseHeading>
    <BaseHeading v-if="selectedProject?.websites" :heading="'Websites'">
      <div class="text-slate-700 mb-5 p-3">
        <ul class="list-disc list-inside text-blue-500">
          <li v-for="(website, index) in selectedProject.websites" :key="index"><a :href="website" class="hover:underline">{{ website }}</a></li>
        </ul>
      </div>
    </BaseHeading>
    <BaseHeading v-if="selectedProject?.stacks" heading="Stacks">
      <div class="text-slate-700 mb-5 p-3">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(stack, index) in selectedProject.stacks"
            :key="index"
            class="px-2 py-1 rounded text-sm font-medium text-white bg-indigo-500 shadow-sm"
          >
            {{ stack }}
          </span>
        </div>
      </div>
    </BaseHeading>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Project } from '~/types';

const props = defineProps<{
  projectList: Project[];
  initialIsOpen?: boolean;
}>();

const selectedProject = ref(props.projectList[0] ? props.projectList[0] : null);
</script>
