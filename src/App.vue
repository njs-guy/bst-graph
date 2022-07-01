<template>
  <!-- Nav bar, probably -->
    <div class="main-content flex flex-col gap-4 max-w-lg">
      <Graph class="" name="Pikablu" />
      <LabelInput idName="hp-input" text="HP" />
      <LabelInput idName="att-input" text="Attack" />
      <LabelInput idName="def-input" text="Defense" />
      <LabelInput idName="spa-input" text="Sp. Attack" />
      <LabelInput idName="spd-input" text="Sp. Defense" />
      <LabelInput idName="spe-input" text="Speed" />
      <button type="button" class="btn bg-indigo-700" @click="outputImage">Save as SVG</button>
    </div>
  <!-- Footer, probably -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Graph from './components/Graph.vue';
import LabelInput from './components/LabelInput.vue'

import html2canvas from 'html2canvas';
import {elementToSVG} from 'dom-to-svg';

export default defineComponent({
  name: 'App',
  components: {
    Graph,
    LabelInput,
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
  }
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
}

#app {
  font-family: 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
}

.btn {
  @apply hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded;
}
</style>
