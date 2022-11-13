// Handles saving and loading app settings

export function saveQuality(quality: string) {
	localStorage.setItem("quality", quality);
}

export function saveTheme(dark: string) {
	localStorage.setItem("dark", dark);
}

export function changeTheme(darkMode: boolean) {
	const html = document.getElementsByTagName("html")[0];

	if (darkMode) {
		html.classList.add("dark");
	} else {
		html.classList.remove("dark");
	}

	saveTheme(String(darkMode));
}

export function loadSettings() {
	const quality = localStorage.getItem("quality");
	const dark = localStorage.getItem("dark");

	const qSel = document.getElementById("quality-select") as HTMLSelectElement;
	const themeSw = document.getElementById("theme") as HTMLInputElement;

	// Check if there's a saved setting for quality
	if (quality !== null) {
		qSel.value = quality; // Set the value of the quality selector
	}

	// Check if dark mode is true
	if (dark === "true") {
		changeTheme(true); // Change theme
		themeSw.checked = true; // Check theme checkbox
	}
}
