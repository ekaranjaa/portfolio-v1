<template>
  <section id="skills" class="relative">
    <div
      v-if="skills"
      class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"
    >
      <h2 class="mb-4 text-center font-baskervile text-4xl">
        <span>Skills</span>
        <span
          class="mt-2 mx-auto block w-24 h-0.5 bg-gray-800 dark:bg-gray-200"
        ></span>
      </h2>
      <div v-if="skills">
        <ul
          class="mx-auto flex items-center justify-center flex-wrap max-w-3xl"
        >
          <li
            v-for="(skill, index) in skills.skills"
            :key="(index + 1) * Math.random()"
            class="m-1 md:m-2 flex items-center border dark:border-gray-700 rounded-xl overflow-hidden"
          >
            <div class="p-4 md:p-3 h-14 w-14 overflow-hidden">
              <img
                :src="`/images/skills/${skill.icon}`"
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <p class="px-4 text-sm md:text-base">
              {{ skill.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skills: null
    };
  },
  created() {
    this.getSkills();
  },
  methods: {
    async getSkills() {
      const skills = await this.$content('skills').fetch();

      this.skills = skills;
    }
  }
};
</script>
