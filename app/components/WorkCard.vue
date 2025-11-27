<template>
  <BaseCard
    :title="'/work/{company}'"
    :initial-is-open="initialIsOpen"
  >
    <BaseDropdown
      :options="workList"
      :option-display-attribute="'company'"
      heading="Company"
      v-model="selectedWork"
    />
    <BaseHeading :heading="'Position'">
      <div class="text-slate-700 mb-5 p-3">{{ selectedWork?.position }}</div>
    </BaseHeading>
    <BaseHeading v-if="selectedWork?.location" :heading="'Location'">
      <div class="text-slate-700 mb-5 p-3">{{ selectedWork.location }}</div>
    </BaseHeading>
    <BaseHeading :heading="'Achievements'">
      <div
        v-for="(achievement, index) in selectedWork?.achievements ?? []" :key="index"
        class="mb-2 p-3"
        :class="index < ((selectedWork?.achievements?.length) ?? 0) - 1 ? 'border-b border-gray-200' : ''"
      >
        <BaseSubheading :heading="achievement.name">
          <div class="text-slate-700 mb-5 px-3">
            <ul class="list-disc list-inside">
              <li v-for="(desc, index) in achievement.descriptions" :key="index">{{ desc }}</li>
            </ul>
          </div>
        </BaseSubheading>
        <BaseSubheading heading="Used Stacks">
          <div class="text-slate-700 mb-5 px-3">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(stack, index) in achievement.stacks"
                :key="index"
                class="px-2 py-1 rounded text-sm font-medium text-white bg-indigo-500"
              >
                {{ stack }}
              </span>
            </div>
          </div>
        </BaseSubheading>
      </div>
    </BaseHeading>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Work } from '~/types';

const props = defineProps<{
  workList: Work[];
  initialIsOpen?: boolean;
}>();

const selectedWork = ref(props.workList[0] ? props.workList[0] : null);
</script>
