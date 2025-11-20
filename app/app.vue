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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const serverUrl = ref('https://petstore3.swagger.io/api/v3')
</script>
