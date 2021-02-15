<template>
  <section id="about" class="relative">
    <div
      v-if="about"
      class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"
    >
      <h2 class="mb-4 font-baskervile text-4xl">
        <span>About</span>
        <span class="mt-2 block w-24 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
      </h2>
      <div>
        <p
          v-for="(desc, index) in description"
          :key="(index + 1) * Math.random()"
        >
          {{ desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      about: null
    };
  },
  computed: {
    description() {
      const about = this.about;
      let description;

      if (about !== null) {
        description = about.description.split('\n');
      }

      return description;
    }
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
