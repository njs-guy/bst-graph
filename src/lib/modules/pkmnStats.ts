export default class PkmnStats {
	hp: number;
	attack: number;
	defense: number;
	spAttack: number;
	spDefense: number;
	speed: number;
	total: number;

	getTotal() {
		return (
			this.hp +
			this.attack +
			this.defense +
			this.spAttack +
			this.spDefense +
			this.speed
		);
	}

	constructor(
		hp: number,
		attack: number,
		defense: number,
		spAttack: number,
		spDefense: number,
		speed: number
	) {
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.spAttack = spAttack;
		this.spDefense = spDefense;
		this.speed = speed;
		this.total = this.getTotal();
	}
}
