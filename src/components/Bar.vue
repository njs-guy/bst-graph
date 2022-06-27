<template>
    <div class="row flex flex-row">
        <p class="label basis-1/4">{{ label }}: {{ stat }}</p>
        <div class="bar-container basis-3/4">
            <div class="bar rounded-r" :style="style"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    Name: 'Bar',
    props: {
        label: String,
        stat: Number,
        color: String,
        width: Number,
    },
    computed: {
        // Returns style from color and width props
        style() {
            let bgc = "";
            let wid = "";

            if (this.color == undefined){
                bgc = "background-color: red;";
            } else {
                bgc = "background-color: " + this.color + ";";
            }

            if (this.width == undefined) {
                wid = "width: 100%;";
            } else {
                wid = "width: " + this.width + "%;";
            }

            let style = bgc + " " + wid;
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
        height: 100%;
    }

    .bar-container {
        height: 20px;
        margin-bottom: 8px;
        /* border: 1px solid rgba(0, 0, 0, 0.2); */
    }
</style>