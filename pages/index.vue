<template>
  <div>
    <headr />
    <about />
    <skill />
    <modal />
    <project />
    <archive />
    <contact />
  </div>
</template>

<script>
import Headr from '@/components/Sections/Headr.vue';
import About from '@/components/Sections/About.vue';
import Skill from '@/components/Sections/Skill.vue';
import Modal from '@/components/Modals/Modal.vue';
import Project from '@/components/Sections/Project.vue';
import Contact from '@/components/Sections/Contact.vue';
import Archive from '@/components/Sections/Archive.vue';

export default {
  components: {
    Headr,
    About,
    Skill,
    Modal,
    Project,
    Contact,
    Archive
  }
};
</script>
