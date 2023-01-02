<template>
  <footer class="pt-16">
    <hr />
    <div
      class="flex flex-col md:flex-row items-center md:items-start justify-between px-4 pt-8 pb-12"
    >
      <div class="flex flex-col items-center md:items-start">
        <p class="text-xl font-extrabold">iamkentleom</p>
        <div
          class="grid grid-cols-4 md:grid-cols-2 gap-2 md:w-20 mt-2 justify-items-center items-center"
        >
          <a
            href="mailto:leomakibulan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <mail
              class="h-8 w-8 hover:bg-red-500 hover:text-white rounded-md p-1 transition-all"
            />
          </a>
          <a
            href="https://linkedin.com/in/iamkentleom"
            target="_blank"
            rel="noreferrer"
            ><linkedin
              class="h-8 w-8 hover:bg-blue-600 hover:text-white rounded-md p-1 transition-all"
          /></a>
          <a
            href="https://github.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
            ><github
              class="h-8 w-8 hover:bg-gray-700 hover:text-white rounded-md p-1 transition-all"
          /></a>
          <a
            href="https://twitter.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
            ><twitter
              class="h-8 w-8 hover:bg-blue-400 hover:text-white rounded-md p-1 transition-all"
          /></a>
        </div>
      </div>
      <div class="flex flex-col md:flex-row pt-4 md:pt-0 md:space-x-24">
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
            <li><router-link to="/attributions">Attributions</router-link></li>
            <li>
              <router-link to="/privacy-policy">Privacy Policy</router-link>
            </li>
          </ul>
        </div>
        <div class="footer:links">
          <p>Others</p>
          <ul>
            <li><router-link to="/cv">Curriculum Vitae</router-link></li>
            <li><router-link to="/site-map">Site Map</router-link></li>
            <li><router-link to="/donate">Donate</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div
      class="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-8 text-sm md:text-base"
    >
      <p>&copy; {{ year }} Kent Leo L. Makibulan</p>
      <p class="text-teal-500">
        &lt;&#47;&gt; <span class="text-black">with</span> ❤
      </p>
    </div>
  </footer>
</template>

<script>
import moment from "moment";
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
  computed: {
    year() {
      return moment().format("YYYY");
    },
  },
};
</script>
