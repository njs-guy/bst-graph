<template>
    <div class="input-container flex flex-col">
        <label :for="idName" class="place-self-start font-bold">Name</label>
        <input type="text" class="rounded outline-indigo-700 caret-indigo-700 outline-offset-0 h-8 px-2 bg-gray-200" value="Pikablu" :id="idName" :name="idName">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    Name: 'NameInput',
    props: {
        idName: String,
    }
});
</script>