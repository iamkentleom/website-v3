<template>
  <div>
    <section
      id="main"
      class="flex flex-col md:flex-row items-center justify-around"
    >
      <div>
        <h1 class="font-semibold text-6xl">Kent</h1>
        <h1 class="font-semibold text-6xl">Leo L.</h1>
        <h1 class="font-semibold text-6xl">Makibulan</h1>
        <p class="mt-4 mb-6 text-xl">
          {{ age }} - Software Developer - Cebu PH
        </p>
        <a
          class="px-4 py-3 font-semibold bg-teal-100 hover:bg-teal-50 text-teal-500 rounded-xl"
          href="#about"
          >Learn More -></a
        >
      </div>
      <div class="w-full xl:w-auto h-full xl:h-96 aspect pt-8 xl:pt-0">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_eudqddb6.json"
          background="transparent"
          speed="0.8"
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
    <section id="about">
      <div class="text-center">
        <p class="text-teal-500 font-extrabold">ABOUT ME</p>
        <h1 class="font-semibold text-4xl">Hello World! I'm Kent</h1>
        <p>I picture myself as the unification of these three personas</p>
      </div>
      <div class="flex flex-col md:flex-row justify-around px-0 2xl:px-20">
        <Persona
          title="Developer"
          description="I am forever passionate about technology and certainly in love with programming. I have experience on developing softwares over the years and I'm always up for challenges that’ll drive me to be a better developer."
        />
        <Persona
          title="Designer"
          description="I always have an eye for great design and I am aware of its importance in the digital space. Through it, I educate myself to keep in touch with the trends and be skilled in the various tools of UI/UX design."
        />
        <Persona
          title="Dreamer"
          description="I dream big. Hence, I continuously takes small steps to craft my ideas into reality. I keep myself motivated by this rationale and it pushed me through my limits, to always be the best version of myself."
        />
      </div>
    </section>
    <section id="projects">
      <div class="text-center">
        <p class="text-teal-500 font-extrabold">PROJECTS</p>
        <h1 class="font-semibold text-4xl">My Works</h1>
        <p>A showcase of my previous projects</p>
      </div>
      <div class="flex flex-col items-center pt-8">
        <Slider />
        <router-link
          to="/projects"
          class="px-4 py-3 font-semibold mt-6 mb-8 text-white bg-teal-500 hover:bg-teal-400 rounded-xl"
          >View all projects -></router-link
        >
      </div>
    </section>
    <section id="contact">
      <div class="flex flex-col items-center">
        <p class="text-teal-500 font-extrabold">CONTACT</p>
        <h1 class="font-semibold text-4xl">Hire Me</h1>
        <p>Let's get some work done</p>
        <p class="w-full md:w-2/3 text-center text-lg py-8">
          Whether you are thinking of hiring me or just up for a nerdy
          chit-chat, feel free to contact with me through these various
          platforms
        </p>
        <div class="grid grid-cols-4 gap-4 w-4/5 md:w-1/3 justify-items-center">
          <a
            href="mailto:leomakibulan@gmail.com"
            target="_blank"
            rel="noreferrer"
            class="hover:bg-red-500 hover:text-white rounded-2xl p-2 transition-all"
            ><mail
          /></a>
          <a
            href="https://linkedin.com/in/iamkentleom"
            target="_blank"
            rel="noreferrer"
            class="hover:bg-blue-600 hover:text-white rounded-2xl p-2 transition-all"
            ><linkedin
          /></a>
          <a
            href="https://github.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
            class="hover:bg-gray-700 hover:text-white rounded-2xl p-2 transition-all"
            ><github
          /></a>
          <a
            href="https://twitter.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
            class="hover:bg-blue-400 hover:text-white rounded-2xl p-2 transition-all"
            ><twitter
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import Persona from "@/components/Persona.vue";
import Slider from "@/components/Slider.vue";
import mail from "@/assets/mail.vue";
import linkedin from "@/assets/linkedin.vue";
import github from "@/assets/github.vue";
import twitter from "@/assets/twitter.vue";

export default {
  name: "Home",
  components: {
    Persona,
    Slider,
    mail,
    linkedin,
    github,
    twitter,
  },
  computed: {
    age() {
      return moment().diff(moment("1999, 10, 08", "YYYY, MM, DD"), "years");
    },
  },
};
</script>

<style scoped>
.aspect {
  aspect-ratio: 42 / 24;
}
</style>
