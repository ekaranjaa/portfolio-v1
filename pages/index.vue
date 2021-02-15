<template>
  <div>
    <headr />
    <about />
    <skill />
    <project />
    <archive />
    <contact />
  </div>
</template>

<script>
import Headr from '@/components/Sections/Headr.vue';
import About from '@/components/Sections/About.vue';
import Skill from '@/components/Sections/Skill.vue';
import Project from '@/components/Sections/Project.vue';
import Contact from '@/components/Sections/Contact.vue';
import Archive from '@/components/Sections/Archive.vue';

export default {
  components: {
    Headr,
    About,
    Skill,
    Project,
    Contact,
    Archive
  }
};
</script>
