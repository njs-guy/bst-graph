<template>
    <label for="{{idName}}">{{text}} : </label>
    <input type="text" class="rounded" id="{{idName}}" name="{{idName}}">
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