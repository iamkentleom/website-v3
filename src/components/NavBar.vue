<template>
  <nav
    class="flex justify-between py-8 text-lg"
    :class="{
      'items-center': !showMenu,
      'h-screen items-center flex-col z-10': showMenu,
    }"
  >
    <div class="flex justify-between items-start w-full md:w-auto">
      <router-link
        to="/"
        class="font-extrabold text-gray-800 hover:textt-gray-500"
        >iamkentleom</router-link
      >
      <button class="md:hidden" @click="toggleMenu">
        <hamburger class="h-6 w-6" v-if="!showMenu"/>
        <close class="h-6 w-6" v-if="showMenu"/>
      </button>
    </div>
    <ul
      :class="{
        'hidden md:flex': !showMenu,
        'flex flex-col items-center': showMenu,
      }"
    >
      <li @click="closeMenu"><router-link to="/">Home</router-link></li>
      <li @click="closeMenu">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li @click="closeMenu"><router-link to="/blog">Blog</router-link></li>
      <li @click="closeMenu"><router-link to="/about">About</router-link></li>
    </ul>
    <div class="md:hidden"></div>
  </nav>
</template>

<script>
import hamburger from '@/assets/hamburger.vue'
import close from '@/assets/close.vue'

export default {
  name: 'NavBar',
  components: {
    hamburger,
    close
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>