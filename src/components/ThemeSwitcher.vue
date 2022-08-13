<template>
    <div class="theme-switcher self-center">
        <input type="checkbox" class="mr-1" id="theme" name="theme" value="dark" />
        <label for="theme" class="text-lg">Dark mode</label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    Name: "ThemeSwitcher",
    methods: {

    },
});
</script>

<style scoped>

</style>