<template>
    <div class="row flex flex-row items-center gap-2">
        <div class="text-container basis-1/3">
            <p class="label">{{ label }}:</p> 
            <p class="stat">{{ stat }}</p>
        </div>
        <div class="bar-container basis-2/3">
            <div class="bar" :id="barId" :style="style"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    Name: 'Bar',
    props: {
        barId: {
            type: String,
            default: "",
        },
        label: String,
        color: String,
        stat: Number,
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
    height: 1.7em;
}

.label {
    font-weight: bold;
    float: left;
}

.stat {
    float: right;
}

.label, .stat {
    font-size: 18px;
}

@media(min-width: 32rem) {
    .text-container {
        @apply basis-1/4;
    }
    .bar-container {
        @apply basis-3/4;
    }
}
</style>