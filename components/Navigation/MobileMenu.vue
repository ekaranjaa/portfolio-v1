<template>
  <div>
    <div
      class="fixed inset-0 md:hidden bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-20"
      :class="{ 'opacity-0 invisible': !menu, 'opacity-100 visible': menu }"
    ></div>
    <ul
      class="p-8 fixed transform inset-y-0 md:hidden font-sourcecode text-sm right-0 w-56 bg-white dark:bg-gray-900 flex flex-col justify-center transition-all duration-300 z-20 overflow-hidden"
      :class="{
        'translate-x-56 invisible': !menu,
        'translate-x-0 visible shadow-lg': menu
      }"
    >
      <li class="absolute top-4 right-8">
        <menu-toggle />
      </li>
      <li class="mx-auto mb-8">
        <theme-toggle />
      </li>
      <li>
        <nuxt-link
          to="/#about"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-red-500 focus:text-blue-500 dark:focus:text-red-500"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#skills"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-red-500 focus:text-blue-500 dark:focus:text-red-500"
          >Skills</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#projects"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-red-500 focus:text-blue-500 dark:focus:text-red-500"
          >Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#contact"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-red-500 focus:text-blue-500 dark:focus:text-red-500"
          >Contact</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuToggle from '@/components/Widgets/MenuToggle.vue';
import ThemeToggle from '@/components/Widgets/ThemeToggle.vue';

export default {
  name: 'MobileMenu',
  components: { ThemeToggle, MenuToggle },
  computed: mapGetters({
    menu: 'menu'
  })
};
</script>
