<template>
  <section id="projects" class="relative">
    <div
      v-if="projects"
      class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"
    >
      <h2 class="mb-8 text-center font-baskervile text-4xl">
        <span>Projects</span>
        <span
          class="mt-2 mx-auto block w-24 h-0.5 bg-gray-800 dark:bg-gray-200"
        ></span>
      </h2>
      <article
        v-for="(project, index) in projects"
        :key="(index + 1) * Math.random()"
        class="mx-auto mb-8 md:mb-12 relative lg:flex lg:items-center rounded-xl overflow-hidden"
        :class="{
          'text-right flex-row': index % 2 === 0,
          'text-left flex-row-reverse': index % 2 !== 0
        }"
      >
        <div
          class="h-80 relative lg:border-2 lg:dark:border-gray-800 lg:max-w-xl rounded-xl overflow-hidden shadow-xl"
        >
          <div
            class="hidden lg:block absolute inset-0 bg-blue-500 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0"
          ></div>
          <img
            :src="project.cover_image"
            :alt="project.title"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="p-4 md:p-6 lg:p-0 flex items-center absolute text-gray-200 lg:text-gray-800 lg:dark:text-gray-200 bg-blue-900 dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 inset-0 lg:relative lg:bg-transparent lg:dark:bg-transparent z-10"
          :class="{
            'lg:-ml-12 lg:-mr-0': index % 2 === 0,
            'lg:-ml-0 lg:-mr-12': index % 2 !== 0
          }"
        >
          <div>
            <p class="text-blue-400 dark:text-red-500 rounded">Featured</p>
            <h3
              class="mb-2 md:mb-4 font-semibold text-xl md:text-2xl tracking-tight"
            >
              {{ project.title }}
            </h3>
            <div
              class="lg:p-4 leading-6 text-sm lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg"
            >
              <p>{{ project.description }}</p>
            </div>
            <p
              class="mt-2 md:mt-4 text-sm text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"
            >
              <span
                v-for="(lang, i) in project.languages"
                :key="(i + 1) * Math.random()"
              >
                {{ lang }}
              </span>
            </p>
            <div
              class="mt-2 md:mt-4 text-lg text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 flex items-center"
              :class="{
                'justify-end': index % 2 === 0
              }"
            >
              <a
                :href="project.github_link"
                target="_blank"
                rel="noreferrer noopenner"
                class="h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 rounded-full outline-none"
              >
                <git-hub class="h-2/3 w-2/3" />
              </a>
              <a
                :href="project.live_link"
                target="_blank"
                rel="noreferrer noopenner"
                class="ml-4 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 rounded-full outline-none"
              >
                <external-link class="h-2/3 w-2/3" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import ExternalLink from '../Icons/ExternalLink.vue';
import GitHub from '../Icons/GitHub.vue';

export default {
  name: 'Project',
  components: { GitHub, ExternalLink },
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const projects = await this.$content('projects/featured').fetch();

      this.projects = projects;
    }
  }
};
</script>
