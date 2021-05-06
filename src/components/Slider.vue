<template>
    <div class="relative w-full">
        <button @click="left" class="absolute -left-5 p-2 w-10 h-10 bg-gray-100 shadow-lg hover:shadow-none rounded-full" :class="{'invisible': scrollPos==0}">
            <img src="@/assets/chevron-left.svg" alt="">
        </button>
        <div class="slider w-full flex overflow-x-auto">
            <ProjectCard banner="TempFileShare-banner.png" type="webapp" title="TempFileShare" description="A web application that lets you share files over the internet temporarily." url="https://temp-file-share.web.app/"/>
            <ProjectCard banner="tinyurl-rest-wrapper-banner.png" type="api" title="tinyurl-rest-wrapper" description="A workaround for the old TinyURL API and lets you make requests freely." url="https://tinyurl-rest-wrapper.herokuapp.com/"/>
            <ProjectCard banner="DarkerJupyter-banner.png" type="extension" title="DarkerJupyter" description="A browser extension that restyles Jupyter Notebooks to a darker theme." url="https://addons.mozilla.org/en-US/firefox/addon/darker-jupyter/"/>
            <ProjectCard banner="https://asciinema.org/a/330735.svg" type="cli" title="zippr" description="Releases archiving automation tool." url="https://www.npmjs.com/package/zippr/"/>
            <ProjectCard banner="lorem-banner.png" type="graphql" title="lorem" description="a fake GraphQL API for testing and prototyping" url="https://github.com/iamkentleom/lorem/"/>
        </div>
        <button @click="right" class="absolute -right-5 p-2 w-10 h-10 bg-gray-100 shadow-lg hover:shadow-none rounded-full" :class="{'invisible': scrollPos==maxPos}">
            <img src="@/assets/chevron-right.svg" alt="">
        </button>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
    name: 'Slider',
    components: {
        ProjectCard,
    },
    data() {
        return {
            scrollPos: 0,
            maxPos: 0,
        };
    },
    methods: {
        left() {
            let content = document.querySelector(".slider")
            content.scrollLeft -= content.scrollWidth/5
            this.scrollPos = content.scrollLeft
        },
        right() {
            let content = document.querySelector(".slider")
            content.scrollLeft += content.scrollWidth/5
            this.scrollPos = content.scrollLeft
        },
        updateScroll() {
            let content = document.querySelector(".slider")
            this.scrollPos = content.scrollLeft
        }
    },
    mounted() {
        let content = document.querySelector(".slider")
        content.addEventListener('scroll', this.updateScroll);
        const ro = new ResizeObserver(() => {
            this.maxPos = content.scrollWidth - content.clientWidth
        })
        ro.observe(content)
    }
}
</script>

<style scoped>
    .slider {
        scroll-behavior: smooth;
        scrollbar-width: none;
        overflow: -moz-scrollbars-none;
    }
    .slider::-webkit-scrollbar {
        width: 0 !important;
        display: none; 
    }
    button {
        top: 45%;
    }
</style>