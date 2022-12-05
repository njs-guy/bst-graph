import { PokemonClient } from "pokenode-ts";
import { checkForForms } from "./checkForForms";
import { graphState } from "./graphState";

// Fetch stats for Pokemon through PokeAPI
export async function fetchStats(pokName = "bidoof") {
	const STAT_ARR: number[] = [];
	const NAME = checkForForms(pokName.toLowerCase());

	const API = new PokemonClient({
		cacheOptions: { maxAge: 5000 },
	});

	await API
		.getPokemonByName(NAME)
		.then((data) => {
			for (let i = 0; i < data.stats.length; i++) {
				// Take each stat and push it to statArray
				const CURRENT = data.stats[i].base_stat;
				STAT_ARR.push(CURRENT);
			}

			// Send data to controls
			fillGraph(STAT_ARR);
		})
		// Retrieve base stats
		.catch(() =>
			alert(
				"That Pokemon does not exist. Please check spelling and try again."
			)
		);
}

// Fills the graph with the current stats
function fillGraph(stats: Array<number>) {
	graphState.setHp(stats[0]);
	graphState.setAtt(stats[1]);
	graphState.setDef(stats[2]);
	graphState.setSpa(stats[3]);
	graphState.setSpd(stats[4]);
	graphState.setSpe(stats[5]);
}
