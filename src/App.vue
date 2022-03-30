<template>
  <NavBar
    class="px-8 lg:px-4 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto"
  />
  <router-view
    class="px-8 lg:px-4 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto"
  />
  <Footer
    class="px-8 lg:px-4 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto"
  />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
