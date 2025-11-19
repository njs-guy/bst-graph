<script lang="ts">
import { page, setPageStore } from "$lib/stores/pageStore";

let currentPage: string | undefined = $state();
page.subscribe((value) => {
	currentPage = value;
});

interface Props {
	href: string;
	label: string;
}

let { href, label }: Props = $props();
</script>

<a
	{href}
	onclick={() => {
		setPageStore(href);
		console.log(currentPage);
	}}
	class={currentPage === href
		? "tab tab-active text-primary nav-link"
		: "tab text-base-content! hover:underline! nav-link"}>{label}</a
>
