<template>
  <div
    class="relative font-poppins dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition"
  >
    <div
      class="absolute top-0 right-0 h-full w-full grid grid-cols-2 md:grid-cols-4"
    >
      <span class="bg-gray-50 dark:bg-gray-800"></span>
      <span></span>
      <span class="bg-gray-50 dark:bg-gray-800"></span>
      <span></span>
      <span></span>
      <span class="bg-gray-50 dark:bg-gray-800"></span>
      <span></span>
      <span class="bg-gray-50 dark:bg-gray-800"></span>

      <span class="bg-gray-50 dark:bg-gray-800"></span>
      <span></span>
      <span class="bg-gray-50 dark:bg-gray-800"></span>
      <span></span>
      <span></span>
      <span class="bg-gray-50 dark:bg-gray-800"></span>
      <span></span>
      <span class="bg-gray-50 dark:bg-gray-800"></span>
    </div>
    <navbar />
    <Nuxt />
    <footr />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar.vue';
import Footr from '@/components/Navigation/Footr.vue';

export default {
  components: { Navbar, Footr }
};
</script>
