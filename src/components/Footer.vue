<template>
  <footer class="py-8">
    <hr />
    <div
      class="flex flex-col md:flex-row items-center md:items-start justify-between px-4 pt-8 pb-12"
    >
      <div class="flex flex-col items-center md:items-start">
        <p class="text-xl font-extrabold">iamkentleom</p>
        <div
          class="grid grid-cols-4 md:grid-cols-2 gap-4 md:w-20 mt-2 justify-items-center items-center"
        >
          <a
            href="mailto:leomakibulan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <mail class="h-6 w-6 hover:text-red-500" />
          </a>
          <a
            href="https://linkedin.com/in/iamkentleom"
            target="_blank"
            rel="noreferrer"
            ><linkedin class="h-6 w-6 hover:text-blue-600"
          /></a>
          <a
            href="https://github.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
            ><github class="h-6 w-6 hover:text-gray-500"
          /></a>
          <a
            href="https://twitter.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
            ><twitter class="h-6 w-6 hover:text-blue-400"
          /></a>
        </div>
      </div>
      <div class="flex flex-col md:flex-row pt-4 md:pt-0">
        <div class="footer:links">
          <p>Pages</p>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
        <div class="footer:links">
          <p>Legal</p>
          <ul>
            <li><a href="">Attributions</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer:links">
          <p>Others</p>
          <ul>
            <li><a href="">Curriculum Vitae</a></li>
            <li><a href="">Site Map</a></li>
            <li><a href="">Donate</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div
      class="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-8 text-sm md:text-base"
    >
      <p>&copy; 2021 Kent Leo L. Makibulan</p>
      <p class="text-teal-500">
        &lt;&#47;&gt; <span class="text-black">with</span> ❤
      </p>
    </div>
  </footer>
</template>

<script>
import mail from "@/assets/mail.vue";
import linkedin from "@/assets/linkedin.vue";
import github from "@/assets/github.vue";
import twitter from "@/assets/twitter.vue";

export default {
  name: "Footer",
  components: {
    mail,
    linkedin,
    github,
    twitter,
  },
};
</script>