import { reactive } from "vue";

const defaultStat = 5;

export const graphState = reactive({
	name: "Name",
	hp: defaultStat,
	att: defaultStat,
	def: defaultStat,
	spA: defaultStat,
	spD: defaultStat,
	spe: defaultStat,
	total: 30,
	type1: "none",
	type2: "none",
	setName(newName: string) {
		this.name = newName;
	},
	setHp(stat: number) {
		this.hp = stat;
		this.updateTotal();
	},
	setAtt(stat: number) {
		this.att = stat;
		this.updateTotal();
	},
	setDef(stat: number) {
		this.def = stat;
		this.updateTotal();
	},
	setSpA(stat: number) {
		this.spA = stat;
		this.updateTotal();
	},
	setSpD(stat: number) {
		this.spD = stat;
		this.updateTotal();
	},
	setSpe(stat: number) {
		this.spe = stat;
		this.updateTotal();
	},
	updateTotal() {
		this.total =
			Number(this.hp) +
			Number(this.att) +
			Number(this.def) +
			Number(this.spA) +
			Number(this.spD) +
			Number(this.spe);
		// I hate javascript
	},
	setType1(newType: string) {
		this.type1 = newType;
	},
	setType2(newType: string) {
		this.type2 = newType;
	},
});
