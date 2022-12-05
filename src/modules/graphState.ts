import { reactive } from "vue";

const DEFAULT_STAT = 5;

export const graphState = reactive({
	name: "Name",
	hp: DEFAULT_STAT,
	att: DEFAULT_STAT,
	def: DEFAULT_STAT,
	spa: DEFAULT_STAT,
	spd: DEFAULT_STAT,
	spe: DEFAULT_STAT,
	total: 30,
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
	setSpa(stat: number) {
		this.spa = stat;
		this.updateTotal();
	},
	setSpd(stat: number) {
		this.spd = stat;
		this.updateTotal();
	},
	setSpe(stat: number) {
		this.spe = stat;
		this.updateTotal();
	},
	updateTotal() {
		this.total =
			this.hp + this.att + this.def + this.spa + this.spd + this.spe;
	},
});
