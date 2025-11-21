<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <div v-if="resumeData" class="max-w-[1000px] mx-auto">
      <header class="mb-10">
        <div class="flex items-end gap-3 mb-2">
          <!-- TITLE -->
          <h1 class="text-4xl font-bold text-slate-800">{{ resumeData.profile?.name || 'Resume' }}</h1>
          <!-- BADGES -->
          <span
            v-for="(badge, index) in resumeData.profile?.badges || []"
            :key="index"
            :class="badge.color"
            class="text-white text-xs font-bold px-2 py-1 rounded-full mb-1"
          >
            {{ badge.text }}
          </span>
        </div>

        <!-- DESCRIPTION -->
        <p class="text-sm leading-relaxed mb-4 text-slate-600">
          {{ resumeData.profile?.description || '' }}
        </p>

        <!-- CONTACTS -->
        <div v-if="resumeData.profile" class="text-sm mb-4">
          <p class="mb-1">Contacts:</p>
          <ul class="list-disc list-inside text-blue-500">
            <li><a :href="`tel:${resumeData.profile.phone}`" class="hover:underline"> {{ resumeData.profile.phone }} </a></li>
            <li><a :href="`mailto:${resumeData.profile.email}`" class="hover:underline"> {{ resumeData.profile.email }} </a></li>
          </ul>
        </div>

        <!-- WEBSITES -->
        <div v-if="resumeData.profile?.websites?.length" class="text-sm mb-4">
          <p class="mb-1">Websites:</p>
          <ul class="list-disc list-inside text-blue-500">
            <li v-for="(website, index) in resumeData.profile.websites" :key="index"><a :href="website" class="block hover:underline"> {{ website }}</a></li>
          </ul>
        </div>
      </header>

      <!-- TODO: language select? -->
      <section class="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2">
        <div class="relative w-full max-w-md">
          <label class="block text-xs font-bold text-slate-700 mb-1">Language</label>
          <select
            v-model="selectedLocale"
            class="w-full p-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-gray-500"
            @change="onLocaleChange"
          >
            <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
              {{ locale.name }}
            </option>
          </select>
        </div>

        <!-- TODO: download PDF version -->
        <div class="self-end sm:self-center">
          <button class="flex items-center gap-2 border-2 border-green-500 text-green-500 px-4 py-1.5 rounded font-bold hover:bg-green-50 transition-colors">
            Download PDF Version
          </button>
        </div>
      </section>

      <BaseSection title="Education" description="">
        <EducationCard
          v-for="(edu, index) in resumeData.education || []"
          :key="index"
          :education="edu"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection title="Skills" description="">
        <SkillCard
          v-for="(skill, index) in resumeData.skills || []"
          :key="index"
          :skill="skill"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection title="Work Experience" description="">
        <WorkExperienceCard
          v-for="(workExperience, index) in resumeData.workExperiences || []"
          :key="index"
          :work-experience="workExperience"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection title="Projects" description="">
        <ProjectCard
          v-for="(project, index) in resumeData.projects || []"
          :key="index"
          :project="project"
          :initial-is-open="true"
        />
      </BaseSection>
    </div>

    <!-- Loading state -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-slate-600">Loading resume data...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeLoader } from './components/composable';

const route = useRoute();
const router = useRouter();
const { loadResumeByLocale, availableLocales, defaultLocale } = useResumeLoader();

const selectedLocale = ref(defaultLocale);

const { data: resumeData, refresh } = await useAsyncData(
  'resume',
  () => loadResumeByLocale(selectedLocale.value),
  { watch: [selectedLocale] },
);

const getInitialLocale = () => {
  const queryLocale = route.query.locale as string;
  const validLocale = availableLocales.find(locale => locale.code === queryLocale);
  return validLocale ? validLocale.code : defaultLocale;
}

const onLocaleChange = async () => {
  await router.push({
    query: {
      ...route.query,
      locale: selectedLocale.value
    }
  })

  await refresh();
};

watch(() => route.query.locale, (newLocale) => {
  if (newLocale && typeof newLocale === 'string') {
    const validLocale = availableLocales.find(locale => locale.code === newLocale);
    if (validLocale && selectedLocale.value !== newLocale) {
      selectedLocale.value = newLocale;
    }
  }
});
</script>

<style>
/* This reserves space for the scrollbar always */
html {
  scrollbar-gutter: stable;
}
</style>
