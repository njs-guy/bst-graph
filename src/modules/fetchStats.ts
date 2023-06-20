import { PokemonClient } from "pokenode-ts";
import { checkForForms } from "./checkForForms";
import { graphState } from "./graphState";

// Fetch stats for Pokemon through PokeAPI
export async function fetchStats(pokName = "bidoof") {
	const statArr: number[] = [];
	let type1: string;
	let type2: string;
	const name = checkForForms(pokName.toLowerCase());

	const api = new PokemonClient({
		logs: true,
	});

	await api
		.getPokemonByName(name)
		.then((data) => {
			// Set stats
			for (let i = 0; i < data.stats.length; i++) {
				// Take each stat and push it to statArray
				const current = data.stats[i].base_stat;
				statArr.push(current);
			}

			// Set types
			// Only set type1 if there is one type.
			// Set both types if there are two types.
			type1 = data.types[0].type.name;
			if (data.types.length === 2) {
				type2 = data.types[1].type.name;
			} else {
				type2 = "none";
			}

			// Send data to controls
			fillGraph(statArr);
			setTypes(type1, type2);
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
	graphState.setSpA(stats[3]);
	graphState.setSpD(stats[4]);
	graphState.setSpe(stats[5]);
}

// Set types on graph
function setTypes(type1: string, type2: string) {
	graphState.setType1(type1);
	graphState.setType2(type2);
}
