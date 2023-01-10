<template>
  <div class="grid lg:grid-cols-4 py-10">
    <div class="col-span-3">
      <h1>Yann Dumas</h1>
      <h2>Developer freelance & Author</h2>
      <p>Fullstack developer since 6 years, I like to work with VueJs ecosystem. Furthermore, I appreciate NestJs for my Back-end development.</p>
      <p>
        <a href="https://www.malt.fr/profile/yd" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Hire me
        </a>
      </p>
    </div>
    <div class="col-span-1 justify-center items-center hidden lg:flex">
      <img src="/me.jpg" alt="Me in picture" class="rounded-full w-40 h-40"/>
    </div>
  </div>
  <div>
    <h2 class="mb-4">Articles</h2>
    <div class="grid lg:grid-cols-3 gap-4">
      <Card v-if="loading" v-for="n in 3"/>
      <div v-else v-for="article in articles" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" :src="article.cover_image" alt="" />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ article.title }}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ article.description }}</p>
          <a :href="article.canonical_url" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNuxtApp } from "nuxt/app";
import Card from "~/components/skeleton/Card.vue";

const articles = ref<IAllDevToResponse[]>([])
const loading = ref<boolean>(true)

const { $repositories } = useNuxtApp()
$repositories.devTo.all().then((r) => {
  articles.value = r
  loading.value = false
})
</script>

<style scoped>

</style>