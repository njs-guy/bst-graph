<template>
  <!-- Nav bar, probably -->
  <Graph />
  <!-- Footer, probably -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Graph from './components/Graph.vue'

export default defineComponent({
  name: 'App',
  components: {
    Graph
  }
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
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
</style>
