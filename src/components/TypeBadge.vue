<script lang="ts">
import { defineComponent } from "vue";
import capitalizeWord from "../modules/capitalizeWord";
import {
	getPokeTypeClassPrefix,
	getPokeTypeClasses,
} from "../modules/pokeTypes";

export default defineComponent({
	name: "TypeBadge",
	props: {
		typeName: { type: String, default: "none" },
		idName: { type: String, default: "type1" },
	},
	data() {
		return {
			capitalizeWord,
		};
	},
	methods: {
		changeType(newType: string) {
			const classes = getPokeTypeClasses();
			const element = document.getElementById(
				this.idName
			) as HTMLDivElement;

			if (element !== null) {
				for (const cl of classes) {
					element.classList.remove(cl);
				}

				const newClass = getPokeTypeClassPrefix() + newType;

				element.classList.add(newClass);
			}
		},
	},
	mounted: function () {
		this.changeType(this.typeName);
	},
	watch: {
		typeName() {
			this.changeType(this.typeName);
		},
	},
});
</script>

<template>
	<div
		v-show="typeName !== 'none'"
		class="type-badge"
		:id="idName"
	>
		{{ capitalizeWord(typeName) }}
	</div>
</template>

<style scoped>
.type-badge {
	@apply badge badge-lg bg-black border-none rounded w-full;
}

.type-flying {
	background-color: wheat;
}
</style>
