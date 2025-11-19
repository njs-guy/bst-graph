<script lang="ts">
import { onMount } from "svelte";
import { setPath } from "$lib/modules/getPath";
import NavBar from "$lib/components/NavBar.svelte";
import "../app.css";

interface Props {
	children?: import("svelte").Snippet;
}

let { children }: Props = $props();

// Update navbar on load
onMount(setPath);
</script>

<main>
	<NavBar />
	{@render children?.()}
</main>
