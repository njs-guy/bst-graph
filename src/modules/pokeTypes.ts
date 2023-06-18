const pokeTypes: string[] = [
	"bug",
	"dark",
	"dragon",
	"electric",
	"fairy",
	"fighting",
	"fire",
	"flying",
	"ghost",
	"grass",
	"ground",
	"ice",
	"normal",
	"poison",
	"psychic",
	"rock",
	"steel",
	"water",
];

export function getPokeTypes() {
	return pokeTypes;
}

export function getPokeTypeClassPrefix() {
	return "type-";
}

export function getPokeTypeClasses() {
	const classes: string[] = [];
	const types = getPokeTypes();
	const classPrefix = getPokeTypeClassPrefix();

	for (const type of types) {
		classes.push(classPrefix + type);
	}

	return classes;
}
