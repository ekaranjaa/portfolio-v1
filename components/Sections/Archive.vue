<template>
  <section id="projects" class="relative">
    <div
      v-if="projects"
      class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"
    >
      <h2 class="mb-8 text-center font-baskervile text-4xl">
        <span>Other Noteworthy Projects</span>
        <span
          class="mt-2 mx-auto block w-24 h-0.5 bg-gray-800 dark:bg-gray-200"
        ></span>
      </h2>
      <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(project, index) in projects"
          :key="(index + 1) * Math.random()"
          class="p-8 mb-4 md:mb-0 relative bg-white dark:bg-gray-800 transform hover:-translate-y-2 transition-all rounded-xl shadow-lg"
        >
          <div class="mb-4 flex items-center justify-between">
            <div class="h-14 w-14 text-blue-500 dark:text-red-500">
              <folder />
            </div>
            <div class="flex items-center">
              <a
                rel="noreferrer noopenner"
                target="_blank"
                :href="project.github_link"
                class="mr-2 p-2 h-10 w-10 hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 rounded-full outline-none"
              >
                <git-hub />
              </a>
              <a
                rel="noreferrer noopenner"
                target="_blank"
                :href="project.live_link"
                class="p-2 h-10 w-10 hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 rounded-full outline-none"
              >
                <external-link />
              </a>
            </div>
          </div>
          <h3 class="mb-2 font-semibold">{{ project.title }}</h3>
          <p class="text-sm leading-6">{{ project.description }}</p>
          <p
            class="mt-4 sticky top-full text-sm text-gray-500 dark:text-gray-400 rounded"
          >
            <span
              v-for="(lang, i) in project.languages"
              :key="(i + 1) * Math.random()"
            >
              {{ lang }}
            </span>
          </p>
        </article>
      </div>
      <button
        class="mx-auto mt-6 px-6 py-3 block bg-gradient-to-br from-blue-500 to-blue-700 dark:from-red-500 dark:to-red-700 ring-blue-500 dark:ring-red-500 focus:ring-2 text-white rounded-full shadow-xl outline-none"
        :class="{ hidden: climax }"
        @click="addLimit"
      >
        Show More
      </button>
    </div>
  </section>
</template>

<script>
import ExternalLink from '../Icons/ExternalLink.vue';
import Folder from '../Icons/Folder.vue';
import GitHub from '../Icons/GitHub.vue';

export default {
  name: 'Project',
  components: { GitHub, ExternalLink, Folder },
  data() {
    return {
      projects: [],
      limit: 3,
      climax: false
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async addLimit() {
      this.limit += 3;
      await this.getProjects();
      if (this.limit >= this.projects.length + 1) {
        this.climax = true;
      }
    },
    async getProjects() {
      const projects = await this.$content('projects/archive')
        .limit(this.limit)
        .fetch();

      this.projects = projects;
    }
  }
};
</script>
