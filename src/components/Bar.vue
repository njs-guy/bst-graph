<template>
    <div class="bar bg-red-700"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    Name: 'Bar',
    components: {
    }
});
</script>

<style scoped>
    .bar {
        /* background-color: green; */
        height: 20px;
        width: 100%;
    }
</style>