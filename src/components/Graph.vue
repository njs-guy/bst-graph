<template>
    <div class="graph rounded-md px-3 py-1" id="output">
        <h1 class="name text-3xl leading-normal">{{ name }}</h1>
        <div class="grid place-items-center gap-2">
            <Bar class="hp-bar" barId="bar-hp" label="HP" 
                :stat=100 color="#EF4444" :width=50 />
            <Bar class="att-bar" barId="bar-att" label="Attack" 
                :stat=100 color="#F97316" :width=100 />
            <Bar class="def-bar" barId="bar-def" label="Defense" 
                :stat=100 color="#EAB308" :width=30 />
            <Bar class="spa-bar" barId="bar-spa" label="Sp. Atk" 
                :stat=100 color="#3B82F6" :width=42 />
            <Bar class="spd-bar" barId="bar-spd" label="Sp. Def" 
                :stat=100 color="#22C55E" :width=25 />
            <Bar class="spe-bar" barId="bar-spe" label="Speed" 
                :stat=100 color="#EC4899" :width=10 />
            <Bar class="tot-bar" label="Total" 
                :stat=600 color="white" :width=0 />
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