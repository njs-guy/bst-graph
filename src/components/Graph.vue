<template>
    <div class="graph place-content-center rounded-md" id="output">
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
    <button @click="outputImage">Save</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Bar from './Bar.vue'

import html2canvas from 'html2canvas';
import {elementToSVG} from 'dom-to-svg'

export default defineComponent({
    Name: 'Graph',
    components: {
        Bar
    },
    props: {
        name: String,
    },
    methods: {
        outputImage() {
            let output;
            let element = document.getElementById("output");

            // Check whether element is null because typescript kept yelling at me about it
            if (element != null) {
                output = element;
            } else {
                return; // If element is null, do nothing
            }

            // Convert graph html to svg
            let svg = elementToSVG(output);

            // Serialize the svg xml to a string
            let s = new XMLSerializer();
            let strSVG = s.serializeToString(svg)

            // Save that string as an svg file
            let file = new Blob([strSVG], { type: "image/svg+xml" });
            const a = document.createElement("a");
            const url = URL.createObjectURL(file);

            // Download svg file
            a.href = url;
            a.download = "output.svg";
            document.body.appendChild(a);
            a.click();

            // Remove created link
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }
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