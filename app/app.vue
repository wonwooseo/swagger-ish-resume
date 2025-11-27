<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <div v-if="resumeData" class="max-w-[1000px] mx-auto">
      <header class="mb-10">
        <div class="flex items-start gap-3 mb-2">
          <!-- TITLE -->
          <h1 class="text-4xl font-bold text-slate-800">{{ resumeData.title || 'Resume' }}</h1>
          <!-- BADGES -->
          <span
            v-for="(badge, index) in resumeData.badges || []"
            :key="index"
            :class="badge.color"
            class="text-white text-xs font-bold px-2 py-1 rounded-full mb-1"
          >
            {{ badge.text }}
          </span>
        </div>

        <!-- SUMMARY -->
        <p class="text-sm leading-relaxed mb-4 text-slate-700">
          {{ resumeData.summary || '' }}
        </p>

        <!-- CONTACTS -->
        <div class="text-sm mb-4">
          <p class="mb-1"><b>Contacts:</b></p>
          <ul class="list-disc list-inside text-blue-500">
            <li><a :href="`tel:${resumeData.contact.phone}`" class="hover:underline"> {{ resumeData.contact.phone }} </a></li>
            <li><a :href="`mailto:${resumeData.contact.email}`" class="hover:underline"> {{ resumeData.contact.email }} </a></li>
          </ul>
        </div>

        <!-- WEBSITES -->
        <div v-if="resumeData.websites?.length" class="text-sm mb-4">
          <p class="mb-1"><b>Websites:</b></p>
          <ul class="list-disc list-inside text-blue-500">
            <li v-for="(website, index) in resumeData.websites" :key="index"><a :href="website" class="hover:underline"> {{ website }}</a></li>
          </ul>
        </div>
      </header>

      <!-- LANGUAGE SELECT -->
      <section class="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2">
        <div class="relative w-full max-w-md">
          <label class="block font-bold text-slate-700 mb-1">Language</label>
          <select
            v-model="selectedLocale"
            class="w-1/2 p-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-gray-500"
            @change="onLocaleChange"
          >
            <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
              {{ locale.name }}
            </option>
          </select>
        </div>

        <!-- TODO: download PDF version -->
        <!-- <div class="self-end sm:self-center">
          <button class="flex items-center gap-2 border-2 border-green-500 text-green-500 px-4 py-1.5 rounded font-bold hover:bg-green-50 transition-colors">
            Download PDF Version
          </button>
        </div> -->
      </section>

      <BaseSection v-if="resumeData.education" title="Education" description="">
        <!-- GET /education/{institution} -->
        <EducationCard
          :education-list="resumeData.education"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection v-if="resumeData.skill" title="Technical Skills" description="">
        <!-- GET /skill/{category} -->
        <SkillCard
          :skill-list="resumeData.skill"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection v-if="resumeData.work" title="Work Experience" description="">
        <!-- GET /work/{company} -->
        <WorkCard
          :work-list="resumeData.work"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection v-if="resumeData.project" title="Personal Projects" description="">
        <ProjectCard
          :project-list="resumeData.project"
          :initial-is-open="true"
        />
      </BaseSection>
    </div>

    <!-- Loading state -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-slate-700">Loading resume data...</div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="mt-16 text-center text-sm text-slate-500 bg-gray-200 py-8">
    <p class="text-blue-500 mb-5"><a href="#" class="hover:underline">Back to Top</a></p>
    <i class="flex items-center justify-center gap-2 mt-2">
      <a href="https://github.com/wonwooseo/swagger-ish-resume" target="_blank" rel="noopener noreferrer">
        <img src="assets/github-mark.png" alt="GitHub" class="w-6 h-6" >
      </a>
    </i>
  </footer>
</template>

<script setup lang="ts">
import { useResumeLoader } from './components/composable';
import WorkCard from './components/WorkCard.vue';

const route = useRoute();
const router = useRouter();
const { loadResumeByLocale, availableLocales, defaultLocale } = useResumeLoader();

const getInitialLocale = () => {
  const queryLocale = route.query.locale as string;
  const validLocale = availableLocales.find(locale => locale.code === queryLocale);
  return validLocale ? validLocale.code : defaultLocale;
};

const onLocaleChange = async () => {
  await router.push({
    query: {
      ...route.query,
      locale: selectedLocale.value,
    },
  });
  await refresh();
};

const selectedLocale = ref(getInitialLocale());

const { data: resumeData, refresh } = await useAsyncData(
  'resume',
  () => loadResumeByLocale(selectedLocale.value),
  { watch: [selectedLocale] },
);

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
html {
  scrollbar-gutter: stable;
}
</style>
