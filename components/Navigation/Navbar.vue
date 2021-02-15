<template>
  <nav
    ref="navbar"
    class="px-8 h-20 flex items-center justify-between fixed top-0 w-full transition-all bg-opacity-90 dark:bg-opacity-90 z-20"
    :class="{ 'bg-white dark:bg-gray-900 bg-blur': !top }"
  >
    <logo />
    <ul class="hidden md:flex items-center">
      <li>
        <nuxt-link
          to="#about"
          class="px-4 py-2 hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 transition outline-none"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="#skills"
          class="px-4 py-2 hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 transition outline-none"
          >Skills</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="#projects"
          class="px-4 py-2 hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 transition outline-none"
          >Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="#contact"
          class="px-4 py-2 hover:text-blue-500 focus:text-blue-500 dark:hover:text-red-500 dark:focus:text-red-500 transition outline-none"
          >Contact</nuxt-link
        >
      </li>
    </ul>
    <theme-toggle />
  </nav>
</template>

<script>
import Logo from '../Icons/Logo.vue';
import ThemeToggle from '../Widgets/ThemeToggle.vue';

export default {
  name: 'Navbar',
  components: {
    Logo,
    ThemeToggle
  },
  data() {
    return {
      top: true
    };
  },
  mounted() {
    this.animateNav();
  },
  methods: {
    animateNav() {
      let prevScrollpos = window.pageYOffset;

      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos === 0) {
          this.top = true;
        } else {
          this.top = false;
        }

        if (prevScrollpos > currentScrollPos) {
          this.$refs.navbar.style.top = '0';
        } else {
          this.$refs.navbar.style.top = '-6rem';
        }

        prevScrollpos = currentScrollPos;
      };
    }
  }
};
</script>
