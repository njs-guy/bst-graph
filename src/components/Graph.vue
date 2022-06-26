<template>
    <h1 class="name text-3xl">{{ name }}</h1>
    <div class="graph grid place-items-center">
        <Bar class="hp-bar" label="HP" stat=100 color="red" />
        <Bar class="att-bar" label="Attack" stat=100 color="orange" />
        <Bar class="att-bar" label="Defense" stat=100 color="yellow" />
        <Bar class="att-bar" label="Sp. Atk" stat=100 color="blue" />
        <Bar class="att-bar" label="Sp. Def" stat=100 color="green" />
        <Bar class="att-bar" label="Speed" stat=100 color="pink" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Bar from './Bar.vue'

export default defineComponent({
    Name: 'Graph',
    components: {
        Bar
    },
    props: {
        name: String,
    }
});
</script>

<style scoped>
    .graph {
        width: 500px;
    }
</style>