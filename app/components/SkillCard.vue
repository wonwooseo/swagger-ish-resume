<template>
  <BaseCard
    :title="`/skill/{category}`"
    :initial-is-open="initialIsOpen"
  >
    <BaseDropdown
      v-model="selectedSkill"
      :options="skillList"
      :option-display-attribute="'category'"
      heading="Category"
    />
    <BaseHeading :heading="'Skills'">
      <div class="text-slate-700 mb-5 p-3">
        <ul class="list-disc list-inside">
          <li v-for="(item, index) in selectedSkill?.list || []" :key="index">{{ item }}</li>
        </ul>
      </div>
    </BaseHeading>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Skill } from '~/types';

const props = defineProps<{
  skillList: Skill[];
  initialIsOpen?: boolean;
}>();

const selectedSkill = ref(props.skillList[0] ? props.skillList[0] : null);
</script>
