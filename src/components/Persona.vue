<template>
    <div class="flex flex-col p-8 items-center md:items-start text-center md:text-left">
        <img src="@/assets/terminal.svg" alt="Terminal" v-if="title == 'Developer'">
        <img src="@/assets/palette.svg" alt="Palette" v-if="title == 'Designer'">
        <img src="@/assets/trophy.svg" alt="Trophy" v-if="title == 'Dreamer'">
        <h1 class="text-2xl font-medium">{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Persona',
    props: {
        title: String,
        description: String,
    }
}
</script>