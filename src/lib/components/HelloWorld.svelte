<script lang="ts">
// TODO: Delete this boilerplate.

interface Props {
	msg: string;
}

let { msg }: Props = $props();
let count = $state(0);
</script>

<main>
	<div class="grid grid-cols-1 justify-items-center space-y-5">
		<h1>{msg}</h1>
		<button
			class="btn btn-primary font-bold"
			type="button"
			onclick={() => {
				count++;
			}}
		>
			Count is {count}
		</button>
		<p>
			This page works with any daisyUI theme! Try it out and change
			<code>daisyui.themes</code> in <code>src/styles/global.css</code>.
		</p>

		<p>
			Check out
			<a
				class="link"
				href="https://github.com/njs-templates"
				target="_blank"
				rel="noreferrer"
			>
				NJS Templates
			</a>
			and
			<a
				class="link"
				href="https://github.com/vitejs/awesome-vite#templates"
				target="_blank"
				rel="noreferrer"
			>
				Awesome Vite
			</a>
			for more templates.
		</p>
		<p>
			If you can load both pages, everything should be working, so open
			the README in the root of the directory for your next steps and get
			coding.
		</p>
		<p class="text-accent">Click on the logos to learn more</p>
	</div>
</main>

<style scoped>
@reference "../../app.css";

code {
	@apply font-bold bg-base-300;
}
</style>
