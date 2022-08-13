<template>
    <div class="header flex flex-row p-2 bg-panel dark:bg-panel-dark">
        <h1 class="text-2xl mr-auto">BST Graph</h1>
        <ThemeSwitcher class="float-right" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

export default defineComponent({
    Name: "Header",
    methods: {},
    components: { ThemeSwitcher }
});
</script>

<style scoped>

</style>