<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <div class="max-w-[1000px] mx-auto">

      <header class="mb-10">
        <div class="flex items-end gap-3 mb-2">
          <h1 class="text-4xl font-bold text-slate-800">Swagger Petstore - OpenAPI 3.0</h1>
          <span class="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-1">1.0.12</span>
          <span class="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-1">OAS 3.0</span>
        </div>

        <p class="text-sm leading-relaxed mb-4 text-slate-600">
          This is a sample Pet Store Server based on the OpenAPI 3.0 specification. You can find out more about Swagger at 
          <a href="#" class="text-blue-500 hover:underline">http://swagger.io</a>. In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.
        </p>

        <div class="text-sm mb-4">
          <p class="mb-1">Some useful links:</p>
          <ul class="list-disc list-inside text-blue-500">
            <li><a href="#" class="hover:underline">The Pet Store repository</a></li>
            <li><a href="#" class="hover:underline">The source API definition for the Pet Store</a></li>
          </ul>
        </div>

        <div class="text-sm text-blue-500 space-y-1">
          <a href="#" class="block hover:underline">Terms of service</a>
          <a href="#" class="block hover:underline">Contact the developer</a>
          <a href="#" class="block hover:underline">Apache 2.0</a>
          <a href="#" class="block hover:underline">Find out more about Swagger</a>
        </div>
      </header>

      <section class="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2">
        <div class="relative w-full max-w-md">
          <label class="block text-xs font-bold text-slate-700 mb-1">Servers</label>
          <select 
            v-model="serverUrl" 
            class="w-full p-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-gray-500"
          >
            <option value="https://petstore3.swagger.io/api/v3">https://petstore3.swagger.io/api/v3</option>
            <option value="http://localhost:8080">http://localhost:8080</option>
          </select>
        </div>

        <div class="self-end sm:self-center">
          <button class="flex items-center gap-2 border-2 border-green-500 text-green-500 px-4 py-1.5 rounded font-bold hover:bg-green-50 transition-colors">
            Authorize
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4">
              <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1v-3a5 5 0 00-5-5zm-3 5a3 3 0 016 0v3H9V7z"/>
            </svg>
          </button>
        </div>
      </section>

      <BaseSection title="Education" description="">
        <EducationCard 
          v-for="(edu, index) in education" 
          :key="index" 
          :colors="useBlueCardColors()"
          :education="edu"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection title="Skills" description="">
        <SkillCard 
          v-for="(skill, index) in skills" 
          :key="index" 
          :colors="useBlueCardColors()"
          :skill="skill"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection title="Work Experience" description="">
        <WorkExperienceCard 
          v-for="(workExperience, index) in workExperiences" 
          :key="index"
          :colors="useBlueCardColors()"
          :work-experience="workExperience"
          :initial-is-open="true"
        />
      </BaseSection>

      <BaseSection title="Projects" description="">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index"
          :colors="useBlueCardColors()"
          :project="project"
          :initial-is-open="true"
        />
      </BaseSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Education, Project, Skill, WorkExperience } from '~/types'
import { useBlueCardColors } from './composables'

// TODO: fetch data from YAML or API 

// --- Types & Data ---
const education: Education[] = [
  { school: 'University of Test', degree: 'BSc', description: 'Bachelor of Science, Class of 2018', fieldOfStudy: 'Computer Science', gpa: '3.8/4.0' },
]

const skills: Skill[] = [
  { name: 'Go', category: 'Language', description: 'Proficient in Go programming for backend development.', level: 'Advanced' },
  { name: 'SQL', category: 'Database', description: 'Experienced in designing and managing relational databases.', level: 'Intermediate' },
]

const workExperiences: WorkExperience[] = [
  { company: 'Innovatech Corp.', position: 'Senior Developer', startDate: 'Jan 2022', endDate: '', location: 'San Francisco, CA', description: 'Leading a team of developers in building scalable cloud-based applications. Implementing best practices for code quality and performance optimization.' },
  { company: 'Tech Solutions Inc.', position: 'Software Engineer', startDate: 'Jan 2019', endDate: 'Dec 2021', location: 'New York, NY', description: 'Developed web applications using Vue.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.' },
]

const projects: Project[] = [
  { name: 'Resume Builder', category: 'Personal', description: 'A web app to create and manage professional resumes.', startDate: 'Mar 2021', endDate: 'Aug 2021', links: ['https://resumebuilder.test.io'], stacks: ['Vue.js', 'Node.js', 'Tailwind CSS'] },
  { name: 'Task Manager', category: 'Work', description: 'A mobile app for task management and productivity.', startDate: 'Sep 2021', endDate: '', links: ['https://taskmgr.test.io'], stacks: ['Flutter', 'Firebase'] },
]

const serverUrl = ref('https://petstore3.swagger.io/api/v3')
</script>

<style>
/* This reserves space for the scrollbar always */
html {
  scrollbar-gutter: stable;
}
</style>