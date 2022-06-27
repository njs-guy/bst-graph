<template>
    <div class="row flex flex-row items-center">
        <div class="basis-1/4">
            <p class="label">{{ label }}:</p> 
            <p class="stat">{{ stat }}</p>
        </div>
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
        margin-bottom: 8px;
    }

    .bar {
        height: 100%;
    }

    .bar-container {
        height: 25px;
        
    }

    .label {
        font-weight: bold;
        float: left;
    }

    .stat {
        float: right;
        margin-right: 5px;
    }
</style>