import { graphState } from "./graphState";
import { randInt } from "./randInt";

// Randomizes the graph's stats and name
export function randomGraph() {
	// Random names to stat with
	const NAMES = [
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

	const DEFAULT_STAT_MIN = 5;
	const DEFAULT_STAT_MAX = 120;

	const nameIndex = randInt(0, NAMES.length);
	const defaultName = NAMES[nameIndex];

	graphState.setName(defaultName);
	graphState.setHp(randInt(DEFAULT_STAT_MIN, DEFAULT_STAT_MAX));
	graphState.setAtt(randInt(DEFAULT_STAT_MIN, DEFAULT_STAT_MAX));
	graphState.setDef(randInt(DEFAULT_STAT_MIN, DEFAULT_STAT_MAX));
	graphState.setSpa(randInt(DEFAULT_STAT_MIN, DEFAULT_STAT_MAX));
	graphState.setSpd(randInt(DEFAULT_STAT_MIN, DEFAULT_STAT_MAX));
	graphState.setSpe(randInt(DEFAULT_STAT_MIN, DEFAULT_STAT_MAX));
}
