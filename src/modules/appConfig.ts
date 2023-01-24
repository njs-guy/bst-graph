// Handles saving and loading app settings

// Saves the PNG quality
export function saveQuality(quality: number) {
	localStorage.setItem("quality", String(quality));
}

// Saves whether dark mode is active
export function saveTheme(dark: boolean) {
	localStorage.setItem("dark", String(dark));
}

// Changes the theme
export function changeTheme(darkMode: boolean) {
	const html = document.documentElement;
	html.removeAttribute("data-theme"); // remove previous theme

	if (darkMode) {
		html.setAttribute("data-theme", "dark");
	} else {
		html.setAttribute("data-theme", "light");
	}

	saveTheme(darkMode);
}

// Loads settings
export function loadSettings() {
	const quality = localStorage.getItem("quality");
	const dark = localStorage.getItem("dark");
	let darkBool = false;

	const qSel = document.getElementById("quality-select") as HTMLSelectElement;
	const themeSw = document.getElementById("theme") as HTMLInputElement;

	// ------Quality------
	// Check if there's a saved setting for quality
	if (quality !== null) {
		qSel.value = quality; // Set the value of the quality selector
	}

	// ------Dark------
	// Check if dark mode is true
	// LocalStorage can only store strings, so booleans have to be converted first.
	if (dark === "true") {
		darkBool = true;
	}
	// Else, darkBool is already false.

	changeTheme(darkBool); // Change theme
	themeSw.checked = darkBool; // Check theme checkbox
}
