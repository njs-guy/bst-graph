import { reactive } from "vue";

const defaultStat = 5;

export const graphState = reactive({
	name: "Name",
	hp: defaultStat,
	att: defaultStat,
	def: defaultStat,
	spa: defaultStat,
	spd: defaultStat,
	spe: defaultStat,
	total: 30,
	setName(newName: string) {
		this.name = newName;
	},
	setHp(stat: number) {
		this.hp = stat;
	},
	setAtt(stat: number) {
		this.att = stat;
	},
	setDef(stat: number) {
		this.def = stat;
	},
	setSpa(stat: number) {
		this.spa = stat;
	},
	setSpd(stat: number) {
		this.spd = stat;
	},
	setSpe(stat: number) {
		this.spe = stat;
	},
	setTotal() {
		this.total =
			this.hp + this.att + this.def + this.spa + this.spd + this.spe;
	},
});
