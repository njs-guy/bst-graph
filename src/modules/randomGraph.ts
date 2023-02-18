import { graphState } from "./graphState";
import { randInt } from "./randInt";

// Randomizes the graph's stats and name
export function randomGraph() {
	// Random names to stat with
	const names = [
		"Pikablu",
		"Missingno",
		"Agumon",
		"Jack Frost",
		"Frodo",
		"Helix",
		"Sonic",
		"Morgana",
		"Mario",
		"Mewthree",
		"Slime",
		"Moogle",
		"Mega Bidoof",
		"Cthulu",
		"Chopper",
	];

	const defaultStatMin = 5;
	const defaultStatMax = 120;

	const nameIndex = randInt(0, names.length);
	const defaultName = names[nameIndex];

	graphState.setName(defaultName);
	graphState.setHp(randInt(defaultStatMin, defaultStatMax));
	graphState.setAtt(randInt(defaultStatMin, defaultStatMax));
	graphState.setDef(randInt(defaultStatMin, defaultStatMax));
	graphState.setSpA(randInt(defaultStatMin, defaultStatMax));
	graphState.setSpD(randInt(defaultStatMin, defaultStatMax));
	graphState.setSpe(randInt(defaultStatMin, defaultStatMax));
}
