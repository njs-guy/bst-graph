<template>
    <div class="flex flex-row gap-4">
        <label for="{{idName}}" class="self-center basis-1/4">{{text}} : </label>
        <input type="text" class="rounded basis-2/4 outline-indigo-700 caret-indigo-500 outline-offset-0 h-8 self-center px-2" id="{{idName}}" name="{{idName}}">
        <button type="button" class="btn bg-indigo-700 basis-1/4">Default</button>
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