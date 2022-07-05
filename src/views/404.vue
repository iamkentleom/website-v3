<template>
  <div class="flex flex-col md:flex-row items-center justify-around py-8">
    <div>
      <h1 class="font-semibold text-6xl">Oops...</h1>
      <p class="mt-4 mb-6 text-xl">
        it's either you've inputted the wrong url or this page is not yet
        implemented
      </p>
      <router-link
        to="/"
        class="px-4 py-3 font-semibold bg-teal-100 hover:bg-teal-50 text-teal-500 rounded-xl"
        >&lt;- Take me home</router-link
      >
    </div>
    <div class="w-full xl:w-auto h-full md:h-72 xl:h-96 aspect pt-8 xl:pt-0">
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_ibxjrcx6.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style scoped>
.aspect {
  aspect-ratio: 38 / 24;
}
</style>
