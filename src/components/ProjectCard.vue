<template>
  <li class="rounded-2xl overflow-hidden">
    <a :href="url" target="_blank" rel="noreferrer">
      <div class="container">
        <div class="overflow-hidden rounded-2xl">
          <img
            class="w-full h-60 object-cover rounded-2xl"
            :src="link"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="overlay">
          <div class="flex bg-teal-50 border p-4 rounded-2xl">
            visit {{ title }} &ensp;
            <img class="w-6" src="@/assets/external-link.svg" alt="Link" />
          </div>
        </div>
      </div>
      <div class="overflow-hidden"></div>
      <div class="flex justify-between items-start px-4 pt-4">
        <div class="flex items-center">
          <h1 class="text-2xl font-semibold">{{ title }}</h1>
          <p
            class="bg-teal-100 uppercase text-xs text-teal-500 font-extrabold ml-2 px-3 py-1 rounded-full"
          >
            {{ type }}
          </p>
        </div>
      </div>
      <p class="px-4 pb-4 font-normal">{{ description }}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    banner: {
      default: "",
    },
    type: String,
    title: String,
    description: String,
    url: String,
  },
  computed: {
    link() {
      if (this.banner === "") {
        return "https://via.placeholder.com/150?text=NoImage";
      } else if (this.banner.substring(0, 4) === "http") {
        return this.banner;
      }
      return require("@/assets/" + this.banner);
    },
  },
};
</script>

<style lang="postcss" scoped>
.container {
  @apply relative;
}
.overlay {
  @apply hidden;
  transition: 0.8s ease;
}
li:hover .overlay {
  @apply absolute top-0 bottom-0 left-0 right-0;
  @apply rounded-2xl;
  @apply flex items-center justify-center;
  transition: 0.8s ease;
}
.container > div > img {
  transition: 0.8s ease;
}
li:hover div.container > div > img {
  transform: scale(1.2);
  filter: blur(4px);
  -webkit-filter: blur(4px);
  transition: 0.8s ease;
}
</style>
