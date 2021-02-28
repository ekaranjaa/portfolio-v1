<template>
  <div
    class="relative font-poppins leading-7 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition"
  >
    <background />
    <navbar />
    <mobile-menu />
    <Nuxt />
    <footr />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar.vue';
import Footr from '@/components/Navigation/Footr.vue';
import Background from '@/components/Widgets/Background.vue';
import MobileMenu from '@/components/Navigation/MobileMenu.vue';

export default {
  components: { Navbar, Footr, Background, MobileMenu }
};
</script>
