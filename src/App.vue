<template>
  <!-- Nav bar, probably -->
  <div class="mc-margin">
    <div class="main-content grid grid-cols-1 gap-4 max-w-lg">
      <Graph :nameLabel=name :hpStat=hp :attStat=att :defStat=def
      :spaStat=spa :spdStat=spd :speStat=spe :totStat=tot />
      <form class="name-sec rounded-md bg-white p-3 flex flex-row place-content-stretch gap-4">
        <NameInput class="basis-1/2" :default=name idName="name-input" @nameChanged="onNameChanged" />
        <button type="button" class="btn bg-indigo-700 self-end h-8 flex-grow basis-1/2"
        @click="fetchStats(name)">Autofill</button>
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
      <button type="button" class="btn bg-indigo-700 py-2" @click="outputImage()">Save as SVG</button>
      <button type="button" class="btn bg-indigo-700 py-2" @click="outputImage('png')">Save as PNG</button>
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

const imageType = {
  PNG: "png",
  SVG: "svg"
};

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
    outputImage(imgType = imageType.SVG) {
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
      let strSVG = s.serializeToString(svg);

      // Save that string as an svg file
      let file = new Blob([strSVG], { type: "image/svg+xml;charset=utf-8" });
      const a = document.createElement("a");
      const url = URL.createObjectURL(file);

      if (imgType == imageType.SVG)
      {
        // Download svg file
        a.href = url;
        a.download = "output.svg";
        document.body.appendChild(a);
        a.click();

        // Remove created link
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }

      if(imgType == imageType.PNG)
      {
        let canvas = document.createElement('canvas');
        let size = element.getBoundingClientRect();
        const w = size.width * 10;
        const h = size.height * 10;
        let img = new Image();

        img.onload = () => {
          canvas.width = w;
          canvas.height = h;

          canvas.getContext('2d')?.drawImage(img, 0, 0, w, h);

          // download PNG
          let png = canvas.toDataURL();
          a.href = png;
          a.download = "output";
          document.body.appendChild(a);
          a.click();

          // Remove created link
          document.body.removeChild(a);
          window.URL.revokeObjectURL(png);
        };

        img.src = url;

        // Get SVG size source:
        // https://stackoverflow.com/a/24649456

        // Convert SVG to PNG source:
        // https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
      }

      
    },
    async fetchStats(pokName:string = "bidoof") {
      let statArr:any = [];
      let name = this.checkForForms(pokName.toLowerCase());

      const api = new PokemonClient({
        cacheOptions: { maxAge: 5000 },
      });

      await api
        .getPokemonByName(name)
        .then((data) => {
          for (let i = 0; i < data.stats.length; i++) {
            // Take each stat and push it to statArray
            let current = data.stats[i].base_stat;
            statArr.push(current);
          }

          this.fillGraph(statArr); // Send data to controls
        }) // Retrieve base stats
        .catch((error) => alert("That Pokemon does not exist. Please check spelling and try again."));
    },
    checkForForms(pokName:string)
    {
      switch (pokName) {
        // No response
        case "deoxys":
          return "deoxys-normal";
          break;
        case "wormadam":
          return "wormadam-plant";
          break;
        case "giratina":
          return "giratina-altered";
          break;
        case "shaymin":
          return "shaymin-land";
          break;
        case "basculin":
          return "basculin-red-striped";
          break;
        case "darmanitan":
          return "darmanitan-standard";
          break;
        case "tornadus":
          return "tornadus-incarnate";
          break;
        case "thundurus":
          return "thundurus-incarnate";
          break;
        case "landorus":
          return "landorus-incarnate";
          break;
        case "keldeo":
          return "keldeo-ordinary";
          break;
        case "meloetta":
          return "meloetta-aria";
          break;
        case "aegislash":
          return "aegislash-shield";
          break;
        case "pumpkaboo":
          return "pumpkaboo-average";
          break;
        case "gourgeist":
          return "gourgeist-average";
          break;
        case "zygarde":
          return "zygarde-50";
          break;
        case "oricorio":
          return "oricorio-baile";
          break;
        case "lycanroc":
          return "lycanroc-midday";
          break;
        case "wishiwashi":
          return "wishiwashi-school";
          break;
        case "minior":
          return "minior-red-meteor";
          break;
        case "eiscue":
          return "eiscue-ice";
          break;
        case "morpeko":
          return "morpeko-hangry";
          break;
        default:
          return pokName;
      }
    },
    fillGraph(stats:Array<number>)
    {
      console.log(stats);
      this.hp = stats[0];
      this.att = stats[1];
      this.def = stats[2];
      this.spa = stats[3];
      this.spd = stats[4];
      this.spe = stats[5];
      this.updateTotal();
    }
    
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
