<template>
  <!-- Nav bar, probably -->
  <div class="mc-margin">
    <div class="main-content grid grid-cols-1 gap-4 max-w-lg">
      <Graph :nameLabel=name :hpStat=hp :attStat=att :defStat=def
      :spaStat=spa :spdStat=spd :speStat=spe :totStat=tot />
      <form class="name-sec rounded-md bg-white p-3 flex flex-row place-content-stretch gap-4">
        <NameInput class="basis-1/2" :default=name idName="name-input" @nameChanged="onNameChanged" />
        <button type="button" class="btn bg-indigo-700 self-end h-8 flex-grow basis-1/2"
        @click="autofillGraph()">Autofill</button>
      </form>
      <form class="name-sec rounded-md bg-white p-3 grid grid-cols-3 place-content-stretch gap-4">
        <LabelInput idName="hp-input" text="HP" :default="String(hp)" @statChanged="onHpChanged" />
        <LabelInput idName="att-input" text="Attack" :default="String(att)" 
        @statChanged="onAttChanged" />
        <LabelInput idName="def-input" text="Defense" :default="String(def)" 
        @statChanged="onDefChanged" />
        <LabelInput idName="spa-input" text="Sp. Attack" :default="String(spa)" 
        @statChanged="onSpaChanged" />
        <LabelInput idName="spd-input" text="Sp. Defense" :default="String(spd)" 
        @statChanged="onSpdChanged" />
        <LabelInput idName="spe-input" text="Speed" :default="String(spe)" 
        @statChanged="onSpeChanged" />
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

import { elementToSVG } from 'dom-to-svg';
import { PokemonClient } from 'pokenode-ts';

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
    updateTotal() {
      this.tot = this.hp + this.att + this.def + this.spa + this.spd + this.spe;
    },
    randInt(min: number = 0, max: number = 100) {
      return Math.floor(Math.random() * max) + min;
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
    autofillGraph(name:string = "bidoof") {
      let statArr:any = [];

      (async () => {
        const api = new PokemonClient({
          cacheOptions: { maxAge: 5000 },
        });

        await api
          .getPokemonByName(name)
          .then((data) => statArr.push(data.stats))
          .catch((error) => alert("That Pokemon does not exist. Please check spelling and try again."));
      })();

      console.log(statArr);
    },
    
  },
  mounted: function() { // On load
    const NAMES = [
      "Pikablu", "Missingno", "Agumon", "Jack Frost", "Frodo",
      "Helix", "Sonic", "Morgana", "Mario", "Mewthree",
      "Slime", "Moogle", "Mega Bidoof", "Cthulu", "Chopper"
    ];

    const defaultStatMin = 5;
    const defaultStatMax = 120;

    let nameIndex = this.randInt(0, NAMES.length)
    let defaultName = NAMES[nameIndex];

    this.onNameChanged(defaultName);
    this.onHpChanged(String(this.randInt(defaultStatMin, defaultStatMax)));
    this.onAttChanged(String(this.randInt(defaultStatMin, defaultStatMax)));
    this.onDefChanged(String(this.randInt(defaultStatMin, defaultStatMax)));
    this.onSpaChanged(String(this.randInt(defaultStatMin, defaultStatMax)));
    this.onSpdChanged(String(this.randInt(defaultStatMin, defaultStatMax)));
    this.onSpeChanged(String(this.randInt(defaultStatMin, defaultStatMax)));
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
