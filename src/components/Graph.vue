<template>
    <div class="graph rounded-md px-3 py-1" id="output">
        <h1 class="name text-3xl leading-normal">{{ name }}</h1>
        <div class="grid place-items-center gap-2">
            <Bar class="hp-bar" label="HP" :stat=100 color="#EF4444" :width=50 />
            <Bar class="att-bar" label="Attack" :stat=100 color="#F97316" :width=100 />
            <Bar class="def-bar" label="Defense" :stat=100 color="#EAB308" :width=30 />
            <Bar class="spa-bar" label="Sp. Atk" :stat=100 color="#3B82F6" :width=42 />
            <Bar class="spd-bar" label="Sp. Def" :stat=100 color="#22C55E" :width=25 />
            <Bar class="spe-bar" label="Speed" :stat=100 color="#EC4899" :width=10 />
            <Bar class="tot-bar" label="Total" :stat=600 color="white" :width=0 />
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bar from './Bar.vue';

export default defineComponent({
    Name: 'Graph',
    components: {
        Bar
    },
    props: {
        name: String,
    },
    methods: {
        
    },
});
</script>

<style scoped>
    .graph {
        margin-top: 10px;
        background-color: white;
        width: 100%;
    }
</style>