// Handles saving and loading app settings

// TODO: Have the save functions take the correct data type and have it convert it to string within the save function.

// Saves the PNG quality
export function saveQuality(quality: string) {
	localStorage.setItem("quality", quality);
}

// Saves whether dark mode is active
export function saveTheme(dark: string) {
	localStorage.setItem("dark", dark);
}

// Changes the theme
export function changeTheme(darkMode: boolean) {
	const HTML = document.documentElement;
	HTML.removeAttribute("data-theme"); // remove previous theme

	if (darkMode) {
		HTML.setAttribute("data-theme", "dark");
	} else {
		HTML.setAttribute("data-theme", "light");
	}

	saveTheme(String(darkMode));
}

// Loads settings
export function loadSettings() {
	const QUALITY = localStorage.getItem("quality");
	const DARK = localStorage.getItem("dark");
	let darkBool = false;

	const Q_SEL = document.getElementById("quality-select") as HTMLSelectElement;
	const THEME_SW = document.getElementById("theme") as HTMLInputElement;

	// ------Quality------
	// Check if there's a saved setting for quality
	if (QUALITY !== null) {
		Q_SEL.value = QUALITY; // Set the value of the quality selector
	}

	// ------Dark------
	// Check if dark mode is true
	// LocalStorage can only store strings, so booleans have to be converted first.
	if (DARK === "true") {
		darkBool = true;
	} else {
		darkBool = false;
	}

	changeTheme(darkBool); // Change theme
	THEME_SW.checked = darkBool; // Check theme checkbox
}
