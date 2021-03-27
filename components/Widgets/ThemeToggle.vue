<template>
  <div>
    <button
      v-show="theme === 'dark'"
      class="p-2 h-10 w-10 rounded-full transition ring-blue-500 dark:ring-red-500 hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 focus:ring-2 focus:outline-none"
      @click="setTheme('light')"
    >
      <light />
    </button>
    <button
      v-show="theme === 'light'"
      class="p-2 h-10 w-10 rounded-full transition ring-blue-500 dark:ring-red-500 hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 focus:ring-2 focus:outline-none"
      @click="setTheme('dark')"
    >
      <dark />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Dark from '../Icons/Dark.vue';
import Light from '../Icons/Light.vue';

export default {
  name: 'ThemeToggle',
  components: { Light, Dark },
  computed: mapGetters({
    theme: 'theme'
  }),
  mounted() {
    this.setTheme();
  },
  methods: mapActions({
    setTheme: 'setTheme'
  })
};
</script>
