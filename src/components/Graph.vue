<template>
    <h1 class="name text-3xl">Name</h1>
    <div class="graph grid place-items-center">
        <Bar />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Bar from './Bar.vue'

export default defineComponent({
    Name: 'Graph',
    components: {
        Bar
    }
});
</script>

<style scoped>
    .name {

    }
    .graph {
        width: 500px;
    }
</style>