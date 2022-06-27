<template>
    <div class="graph rounded-md">
        <h1 class="name text-3xl">{{ name }}</h1>
        <div class="grid place-items-center">
            <Bar class="hp-bar" label="HP" stat=100 color="red" width=50 />
            <Bar class="att-bar" label="Attack" stat=100 color="orange" width=70 />
            <Bar class="def-bar" label="Defense" stat=100 color="yellow" width=30 />
            <Bar class="spa-bar" label="Sp. Atk" stat=100 color="blue" width=42 />
            <Bar class="spd-bar" label="Sp. Def" stat=100 color="green" width=25 />
            <Bar class="spe-bar" label="Speed" stat=100 color="pink" width=10 />
            <Bar class="tot-bar" label="Total" stat=600 color="white" width=0 />
        </div>
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
        background-color: white;
        width: 500px;
        padding: 15px;
    }
</style>