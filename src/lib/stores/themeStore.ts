import { themeDark, type GraphTheme } from "$lib/modules/graphTheme";
import { writable } from "svelte/store";

export const theme = writable(themeDark);

export function setTheme(newTheme: GraphTheme) {
	theme.update(() => newTheme);
}

// export function getTheme() {
// 	theme.
// }
