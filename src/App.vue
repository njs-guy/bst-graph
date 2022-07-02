<template>
  <!-- Nav bar, probably -->
  <div class="mc-margin">
    <div class="main-content grid grid-cols-1 gap-4 max-w-lg">
      <Graph :nameLabel=name :hpStat=hp :attStat=att :defStat=def
      :spaStat=spa :spdStat=spd :speStat=spe :totStat=tot />
      <form class="name-sec rounded-md bg-white p-3 flex flex-row place-content-stretch gap-4">
        <NameInput class="basis-1/2" idName="name-input" />
        <button type="button" class="btn bg-indigo-700 self-end h-8 flex-grow basis-1/2">Autofill</button>
      </form>
      <form class="name-sec rounded-md bg-white p-3 grid grid-cols-3 place-content-stretch gap-4">
        <LabelInput idName="hp-input" text="HP"
        @statChanged="onHpChanged" />
        <LabelInput idName="att-input" text="Attack" />
        <LabelInput idName="def-input" text="Defense" />
        <LabelInput idName="spa-input" text="Sp. Attack" />
        <LabelInput idName="spd-input" text="Sp. Defense" />
        <LabelInput idName="spe-input" text="Speed" />
      </form>
      <button type="button" class="btn bg-indigo-700 py-2" @click="outputImage">Save as SVG</button>
    </div>
  </div>
  <!-- Footer, probably -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Graph from './components/Graph.vue';
import LabelInput from './components/LabelInput.vue'
import NameInput from './components/NameInput.vue'

import html2canvas from 'html2canvas';
import {elementToSVG} from 'dom-to-svg';

export default defineComponent({
  name: 'App',
  components: {
    Graph,
    LabelInput,
    NameInput,
  },
  props: {

  },
  data() {
    return {
      name: "Name",
      hp: 1,
      att: 1,
      def: 1,
      spa: 1,
      spd: 1,
      spe: 1,
      tot: 1,
    }
  },
  methods: {
    onHpChanged(value: string) {
      this.hp = Number(value);
    },
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
    },
    
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
  font-family: 'Cabin', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.mc-margin {
  margin: 10px;
}

.main-content {
  margin: 0 auto;
}

.btn {
  @apply hover:bg-indigo-900 text-white font-bold rounded;
}
</style>
