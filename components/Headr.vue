<template>
  <header class="min-h-screen flex items-center">
    <div class="container mx-auto px-8 py-20 md:py-4 relative">
      <div class="grid md:grid-cols-2">
        <div class="order-1 md:order-none">
          <main class="mb-6">
            <p class="mb-2 font-gabriela">Emmanuel Karanja</p>
            <h1 class="mb-4 font-baskervile text-5xl leading-tight">
              <span> Designer and full-stack web developer </span>
              <span
                class="mt-2 block w-24 h-0.5 bg-gray-800 dark:bg-gray-200"
              ></span>
            </h1>
            <p>
              Young, versatile and enthusiastic programmer and entrepreneur.
            </p>
          </main>
          <div
            class="mb-8 flex items-center justify-between md:justify-start text-gray-500 dark:text-gray-400"
          >
            <nuxt-link
              to="#"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <linked-in />
            </nuxt-link>
            <nuxt-link
              to="#"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <git-hub />
            </nuxt-link>
            <nuxt-link
              to="#"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <twitter />
            </nuxt-link>
            <nuxt-link
              to="#"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <pluralsight />
            </nuxt-link>
            <nuxt-link
              to="#"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <codepen />
            </nuxt-link>
            <nuxt-link
              to="#"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <dribbble />
            </nuxt-link>
          </div>
          <nuxt-link
            to="#contact"
            class="px-6 py-3 inline-block bg-gradient-to-br from-blue-500 to-blue-700 dark:from-red-500 dark:to-red-700 text-white transition shadow-xl rounded-full outline-none"
          >
            Get In Touch
          </nuxt-link>
        </div>
        <div
          class="avatar mx-auto my-14 h-60 w-60 md:h-64 md:w-64 bg-blue-500 dark:bg-red-500 rounded-full overflow-hidden"
        >
          <img
            src="@/assets/images/author.png"
            alt="Emmanuel Karanja"
            class="w-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Codepen from './Icons/Codepen.vue';
import Dribbble from './Icons/Dribbble.vue';
import GitHub from './Icons/GitHub.vue';
import LinkedIn from './Icons/LinkedIn.vue';
import Pluralsight from './Icons/Pluralsight.vue';
import Twitter from './Icons/Twitter.vue';

export default {
  components: { GitHub, LinkedIn, Codepen, Dribbble, Pluralsight, Twitter }
};
</script>

<style scoped>
.avatar {
  box-shadow: 0 0 0 1.25rem #f5f5f5, 0 0 0 2.5rem #fafafa;
}

.dark .avatar {
  box-shadow: 0 0 0 1.25rem #404040, 0 0 0 2.5rem #262626;
}
</style>
