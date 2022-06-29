<template>
    <div class="graph rounded-md" id="output">
        <h1 class="name text-3xl">{{ name }}</h1>
        <div class="grid place-items-center">
            <Bar class="hp-bar" label="HP" :stat=100 color="#F20000" :width=50 />
            <Bar class="att-bar" label="Attack" :stat=100 color="#FA8128" :width=100 />
            <Bar class="def-bar" label="Defense" :stat=100 color="#FFC30B" :width=30 />
            <Bar class="spa-bar" label="Sp. Atk" :stat=100 color="#0080FF" :width=42 />
            <Bar class="spd-bar" label="Sp. Def" :stat=100 color="#3CB043" :width=25 />
            <Bar class="spe-bar" label="Speed" :stat=100 color="#F699CD" :width=10 />
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
    .name {
        margin-top: -3px;
        margin-bottom: 10px;
    }

    .graph {
        margin-top: 10px;
        background-color: white;
        width: 500px;
        padding: 15px;
    }
</style>