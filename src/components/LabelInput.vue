<template>
    <div class="input-container flex flex-col">
        <label :for="idName" class="place-self-start font-bold">{{text}}</label>
        <input type="number" :id="idName" :name="idName" 
        class="rounded outline-indigo-700 caret-indigo-700 outline-offset-0 h-8 px-2 bg-gray-200" 
        min="1" max="999" value="100">
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