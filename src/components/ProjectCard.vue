<template>
    <div class="bg-gray-100 rounded-2xl overflow-hidden card">
        <div class="overflow-hidden">
            <img class="w-full h-44 object-cover" :src="link" alt="">
        </div>
        <p class="uppercase text-sm text-teal-500 font-normal px-4 pt-2">{{ type }}</p>
        <div class="flex justify-between items-start px-4">
            <h1 class="text-2xl font-semibold">{{ title }}</h1>
            <a :href="url" target="_blank" rel="noreferrer" class="hover:bg-gray-200 p-1 rounded-md">
                <img class="w-6" src="@/assets/external-link.svg" alt="Link">
            </a>
        </div>
        <p class="px-4 pb-4 font-normal">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        banner: {
            default: '',
        },
        type: String,
        title: String,
        description: String,
        url: String,
    },
    computed: {
        link() {
            if(this.banner === ''){
                return 'https://via.placeholder.com/150?text=NoImage'
            }
            else if(this.banner.substring(0,4) === 'http'){
                return this.banner
            }
            return require('@/assets/' + this.banner)
        }
    }
}
</script>

<style scoped>
    .card {
        min-width: 20rem;
        max-width: 20rem;
        border: 0.5rem solid white;
        border-radius: 1.5rem;
        box-sizing: content-box;
    }
</style>