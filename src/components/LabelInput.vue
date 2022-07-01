<template>
    <div class="input-container flex flex-col">
        <label for="{{idName}}" class="place-self-start font-bold">{{text}}</label>
        <input type="number" class="rounded outline-indigo-700 caret-indigo-500 outline-offset-0 h-8 px-2" id="{{idName}}" name="{{idName}}">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    Name: 'LabelInput',
    props: {
        idName: String,
        text: String,
    },
});
</script>