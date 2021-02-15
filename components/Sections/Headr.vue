<template>
  <header class="min-h-screen flex items-center relative">
    <div v-if="about" class="container mx-auto px-8 py-4 max-w-6xl">
      <div class="grid md:grid-cols-2">
        <div class="order-1 md:order-none">
          <main class="mb-8">
            <p class="font-gabriela">{{ about.name }}</p>
            <h1 class="mb-4 font-baskervile text-5xl leading-tight">
              <span>{{ about.title }}</span>
              <span
                class="mt-2 block w-24 h-0.5 bg-gray-800 dark:bg-gray-200"
              ></span>
            </h1>
            <p>
              {{ about.bio }}
            </p>
          </main>
          <div
            class="mb-8 flex items-center justify-between md:justify-start text-gray-500 dark:text-gray-400"
          >
            <a
              rel="noreferrer noopenner"
              target="_blank"
              href="https://www.linkedin.com/in/emmanuel-karanja-306201"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <linked-in />
            </a>
            <a
              rel="noreferrer noopenner"
              target="_blank"
              href="https://github.com/ekaranjaa"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <git-hub />
            </a>
            <a
              rel="noreferrer noopenner"
              target="_blank"
              href="https://twitter.com/ekaranjaa"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <twitter />
            </a>
            <a
              rel="noreferrer noopenner"
              target="_blank"
              href="https://app.pluralsight.com/profile/ekaranja"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <pluralsight />
            </a>
            <a
              rel="noreferrer noopenner"
              target="_blank"
              href="https://codepen.io/ekaranja"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <codepen />
            </a>
            <a
              rel="noreferrer noopenner"
              target="_blank"
              href="https://dribbble.com/ekaranja"
              class="md:mr-8 p-2 flex-shrink-0 h-10 w-10 border-2 dark:border-gray-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 dark:hover:text-red-500 dark:hover:border-red-500 dark:focus:text-red-500 dark:focus:border-red-500 transition rounded-full outline-none"
            >
              <dribbble />
            </a>
          </div>
          <nuxt-link
            to="#contact"
            class="px-6 py-3 inline-block bg-gradient-to-br from-blue-500 to-blue-700 dark:from-red-500 dark:to-red-700 text-white ring-blue-500 dark:ring-red-500 focus:ring-2 transition shadow-xl rounded-full outline-none"
          >
            Get In Touch
          </nuxt-link>
        </div>
        <div
          class="avatar mx-auto mt-32 mb-14 h-60 w-60 md:h-64 md:w-64 bg-blue-500 dark:bg-red-500 rounded-full overflow-hidden"
        >
          <img
            :src="`/images/profile/${about.image}`"
            :alt="about.name"
            loading="lazy"
            class="w-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Codepen from '../Icons/Codepen.vue';
import Dribbble from '../Icons/Dribbble.vue';
import GitHub from '../Icons/GitHub.vue';
import LinkedIn from '../Icons/LinkedIn.vue';
import Pluralsight from '../Icons/Pluralsight.vue';
import Twitter from '../Icons/Twitter.vue';

export default {
  name: 'Headr',
  components: {
    GitHub,
    LinkedIn,
    Codepen,
    Dribbble,
    Pluralsight,
    Twitter
  },
  data() {
    return {
      about: null
    };
  },
  created() {
    this.getAbout();
  },
  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch();

      this.about = about;
    }
  }
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
