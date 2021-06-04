<template>
    <div class="relative w-full">
        <button aria-label="Scroll Left" @click="left" class="absolute -left-5 w-10 h-10 flex justify-center items-center bg-white border border-gray-300 shadow-md hover:shadow rounded-full" :class="{'invisible': scrollPos==0}">
            <chevronLeft />
        </button>
        <div class="slider w-full flex overflow-x-auto" @scroll="updateScroll" ref="slider">
            <ProjectCard banner="TempFileShare-banner.webp" type="webapp" title="TempFileShare" description="A web application that lets you share files over the internet temporarily." url="https://temp-file-share.web.app/"/>
            <ProjectCard banner="tinyurl-rest-wrapper-banner.webp" type="api" title="tinyurl-rest-wrapper" description="A workaround for the old TinyURL API and lets you make requests freely." url="https://tinyurl-rest-wrapper.herokuapp.com/"/>
            <ProjectCard banner="DarkerJupyter-banner.webp" type="extension" title="DarkerJupyter" description="A browser extension that restyles Jupyter Notebooks to a darker theme." url="https://addons.mozilla.org/en-US/firefox/addon/darker-jupyter/"/>
            <ProjectCard banner="zippr-banner.webp" type="cli" title="zippr" description="Releases archiving automation tool." url="https://www.npmjs.com/package/zippr/"/>
            <ProjectCard banner="lorem-banner.webp" type="graphql" title="lorem" description="a fake GraphQL API for testing and prototyping." url="https://github.com/iamkentleom/lorem/"/>
        </div>
        <button aria-label="Scroll Right" @click="right" class="absolute -right-5 w-10 h-10 flex justify-center items-center bg-white border border-gray-300 shadow-md hover:shadow rounded-full" :class="{'invisible': scrollPos==maxPos}">
            <chevronRight />
        </button>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import chevronLeft from '@/assets/chevronLeft.vue'
import chevronRight from '@/assets/chevronRight.vue'

export default {
    name: 'Slider',
    components: {
        ProjectCard,
        chevronLeft,
        chevronRight,
    },
    data() {
        return {
            scrollPos: 0,
            maxPos: 0,
            content: null
        };
    },
    methods: {
        left() {
            this.content.scrollLeft -= this.content.scrollWidth/5
            this.scrollPos = this.content.scrollLeft
        },
        right() {
            this.content.scrollLeft += this.content.scrollWidth/5
            this.scrollPos = this.content.scrollLeft
        },
        updateScroll() {
            this.scrollPos = this.content.scrollLeft
        }
    },
    mounted() {
        this.content = this.$refs.slider
        const ro = new ResizeObserver(() => {
            this.maxPos = this.content.scrollWidth - this.content.clientWidth
        })
        ro.observe(this.content)
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