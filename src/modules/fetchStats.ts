import { PokemonClient } from "pokenode-ts";
import { checkForForms } from "./checkForForms";
import { graphState } from "./graphState";

// Fetch stats for Pokemon through PokeAPI
export async function fetchStats(pokName: string = "bidoof") {
	let statArr: any = [];
	let name = checkForForms(pokName.toLowerCase());

	const api = new PokemonClient({
		cacheOptions: { maxAge: 5000 },
	});

	await api
		.getPokemonByName(name)
		.then((data) => {
			for (let i = 0; i < data.stats.length; i++) {
				// Take each stat and push it to statArray
				let current = data.stats[i].base_stat;
				statArr.push(current);
			}

			// Send data to controls
			fillGraph(statArr);
		})
		// Retrieve base stats
		.catch((error) =>
			alert(
				"That Pokemon does not exist. Please check spelling and try again."
			)
		);
}

function fillGraph(stats: Array<number>) {
	graphState.setHp(stats[0]);
	graphState.setAtt(stats[1]);
	graphState.setDef(stats[2]);
	graphState.setSpa(stats[3]);
	graphState.setSpd(stats[4]);
	graphState.setSpe(stats[5]);
}
