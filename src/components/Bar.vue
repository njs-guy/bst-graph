<template>
    <div class="row flex flex-row">
        <p class="label basis-1/4">{{ label }}: {{ stat }}</p>
        <div class="bar basis-1/2" :style="style"></div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    Name: 'Bar',
    props: {
        label: String,
        stat: Number,
        color: String,
    },
    computed: {
        // Returns style of background color from the color prop
        style() {
            let style = "background-color: " + this.color;
            return style;
        },
    },
});
</script>

<style scoped>
    .row {
        width: 100%;
    }

    .bar {
        height: 20px;
        margin-bottom: 5px;
        border: 1px solid black;
    }
</style>