<template>
    <div class="graph rounded-md px-3 py-1" id="output">
        <h1 class="name text-3xl leading-normal">{{ name }}</h1>
        <div class="grid place-items-center gap-2">
            <Bar class="hp-bar" barId="bar-hp" label="HP" 
                :stat=255 color="#EF4444" />
            <Bar class="att-bar" barId="bar-att" label="Attack" 
                :stat=10 color="#F97316" />
            <Bar class="def-bar" barId="bar-def" label="Defense" 
                :stat=10 color="#EAB308" />
            <Bar class="spa-bar" barId="bar-spa" label="Sp. Atk" 
                :stat=75 color="#3B82F6" />
            <Bar class="spd-bar" barId="bar-spd" label="Sp. Def" 
                :stat=135 color="#22C55E" />
            <Bar class="spe-bar" barId="bar-spe" label="Speed" 
                :stat=55 color="#EC4899" />
            <Bar class="tot-bar" label="Total" 
                :stat=540 color="white" />
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
        background-color: white;
        width: 100%;
    }
</style>