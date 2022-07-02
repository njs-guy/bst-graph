<template>
  <!-- Nav bar, probably -->
  <div class="mc-margin">
    <div class="main-content grid grid-cols-1 gap-4 max-w-lg">
      <Graph :nameLabel=name :hpStat=hp :attStat=att :defStat=def
      :spaStat=spa :spdStat=spd :speStat=spe :totStat=tot />
      <form class="name-sec rounded-md bg-white p-3 flex flex-row place-content-stretch gap-4">
        <NameInput class="basis-1/2" idName="name-input" @nameChanged="onNameChanged" />
        <button type="button" class="btn bg-indigo-700 self-end h-8 flex-grow basis-1/2">Autofill</button>
      </form>
      <form class="name-sec rounded-md bg-white p-3 grid grid-cols-3 place-content-stretch gap-4">
        <LabelInput idName="hp-input" text="HP" @statChanged="onHpChanged" />
        <LabelInput idName="att-input" text="Attack" @statChanged="onAttChanged" />
        <LabelInput idName="def-input" text="Defense" @statChanged="onDefChanged" />
        <LabelInput idName="spa-input" text="Sp. Attack" @statChanged="onSpaChanged" />
        <LabelInput idName="spd-input" text="Sp. Defense" @statChanged="onSpdChanged" />
        <LabelInput idName="spe-input" text="Speed" @statChanged="onSpeChanged" />
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
    onNameChanged(value: string) {
      this.name = value;
    },
    onHpChanged(value: string) {
      this.hp = Number(value);
      this.updateTotal();
    },
    onAttChanged(value: string) {
      this.att = Number(value);
      this.updateTotal();
    },
    onDefChanged(value: string) {
      this.def = Number(value);
      this.updateTotal();
    },
    onSpaChanged(value: string) {
      this.spa = Number(value);
      this.updateTotal();
    },
    onSpdChanged(value: string) {
      this.spd = Number(value);
      this.updateTotal();
    },
    onSpeChanged(value: string) {
      this.spe = Number(value);
      this.updateTotal();
    },
    updateTotal(){
      this.tot = this.hp + this.att + this.def + this.spa + this.spd + this.spe;
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
    
  },
  mounted: function() { // On load
    let defaultName = "Pikablu";
    let defaultStats = "100";

    this.onNameChanged(defaultName);
    this.onHpChanged(defaultStats);
    this.onAttChanged(defaultStats);
    this.onDefChanged(defaultStats);
    this.onSpaChanged(defaultStats);
    this.onSpdChanged(defaultStats);
    this.onSpeChanged(defaultStats);
  },
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
