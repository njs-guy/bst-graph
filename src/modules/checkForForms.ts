// Checks the input string and returns a valid PokeAPI response

export function checkForForms(pokName: string) {
	switch (pokName) {
		// No response from regular name
		case "deoxys":
			return "deoxys-normal";
			break;
		case "wormadam":
			return "wormadam-plant";
			break;
		case "giratina":
			return "giratina-altered";
			break;
		case "shaymin":
			return "shaymin-land";
			break;
		case "basculin":
			return "basculin-red-striped";
			break;
		case "darmanitan":
			return "darmanitan-standard";
			break;
		case "tornadus":
			return "tornadus-incarnate";
			break;
		case "thundurus":
			return "thundurus-incarnate";
			break;
		case "landorus":
			return "landorus-incarnate";
			break;
		case "keldeo":
			return "keldeo-ordinary";
			break;
		case "meloetta":
			return "meloetta-aria";
			break;
		case "aegislash":
			return "aegislash-shield";
			break;
		case "pumpkaboo":
			return "pumpkaboo-average";
			break;
		case "gourgeist":
			return "gourgeist-average";
			break;
		case "zygarde":
			return "zygarde-50";
			break;
		case "oricorio":
			return "oricorio-baile";
			break;
		case "lycanroc":
			return "lycanroc-midday";
			break;
		case "wishiwashi":
			return "wishiwashi-school";
			break;
		case "minior":
			return "minior-red-meteor";
			break;
		case "eiscue":
			return "eiscue-ice";
			break;
		case "morpeko":
			return "morpeko-hangry";
			break;

		// TODO: Accept alternate form names

		// Default: entered in a regularly valid name
		default:
			return pokName;
	}
}
