<script lang="ts">
let { label = "Stat", stat = 50 } = $props();
</script>

<div class="grid grid-cols-3 gap-2 m-1">
	<div class="grid grid-cols-2">
		<p>{label}</p>
		<p class="place-self-end">{stat}</p>
	</div>
	<div class="col-span-2 flex h-4 self-center rounded bg-base-300">
		<div class="self-center rounded h-full w-1/2 bg-primary"></div>
	</div>
</div>
