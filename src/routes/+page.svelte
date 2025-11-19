<script lang="ts">
// TODO: Delete this boilerplate.

import HelloWorld from "$lib/components/HelloWorld.svelte";
</script>

<svelte:head>
	<title>njs-guy's Svelte Template</title>
</svelte:head>

<main>
	<div class="main-content">
		<a
			href="https://svelte.dev/"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="/svelte.svg"
				class="logo svelte"
				alt="Svelte logo"
			/>
		</a>
		<a
			href="https://daisyui.com/"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="/daisyui.svg"
				class="logo daisyui"
				alt="daisyUI logo"
			/>
		</a>
		<a
			href="https://www.typescriptlang.org/"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="/typescript.svg"
				class="logo ts"
				alt="TypeScript logo"
			/>
		</a>
	</div>
	<HelloWorld msg="Svelte Kit + daisyUI + TypeScript" />
</main>

<style scoped>
.main-content {
	@apply flex place-content-center;
	margin: 0 auto;
}

.logo {
	height: 10em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.svelte:hover {
	filter: drop-shadow(0 0 2em #ff3e00aa);
}

.logo.daisyui:hover {
	filter: drop-shadow(0 0 2em #ffd420aa);
}

.logo.ts:hover {
	filter: drop-shadow(0 0 2em #3178c6aa);
}
</style>
