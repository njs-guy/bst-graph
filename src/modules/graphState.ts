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
			this.hp + this.att + this.def + this.spA + this.spD + this.spe;
	},
	setType1(newType: string) {
		this.type1 = newType;
	},
	setType2(newType: string) {
		this.type2 = newType;
	},
});
