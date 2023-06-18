<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	Name: "StatBar",
	props: {
		barId: {
			type: String,
			default: "",
		},
		label: String,
		stat: Number,
		isTotal: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		// Adjusts the width of the stat bar
		adjustBarWidth() {
			const bar = document.getElementById(this.barId);
			let wid = 0;

			// Check whether the stat or bar is null because typescript kept yelling at me about it
			if (this.stat === undefined || bar === undefined || bar === null) {
				return;
			}

			if (this.isTotal) {
				wid = (this.stat / 700) * 100; //convert stat to width percent
			} else {
				wid = (this.stat / 180) * 100; //convert stat to width percent
			}

			if (wid > 100) {
				wid = 100; // Width cannot be more than 100%
			}

			if (wid < 2) {
				wid = 2; // Width cannot be less than 2%
			}

			bar.style.width = String(wid) + "%";
		},
		changeContainerColor() {
			// const container = document.querySelector(".bar-container");

			const bar = document.getElementById(this.barId);
			const container = bar?.parentElement;

			if (container && container.querySelector("#bar-hp")) {
				container.classList.add("bar-hp-container");
			}
			if (container && container.querySelector("#bar-att")) {
				container.classList.add("bar-att-container");
			}
			if (container && container.querySelector("#bar-def")) {
				container.classList.add("bar-def-container");
			}
			if (container && container.querySelector("#bar-spA")) {
				container.classList.add("bar-spA-container");
			}
			if (container && container.querySelector("#bar-spD")) {
				container.classList.add("bar-spD-container");
			}
			if (container && container.querySelector("#bar-spe")) {
				container.classList.add("bar-spe-container");
			}
			if (container && container.querySelector("#bar-tot")) {
				container.classList.add("bar-tot-container");
			}
		},
	},
	mounted: function () {
		// On load
		this.adjustBarWidth();
		this.changeContainerColor();
	},
	watch: {
		stat() {
			this.adjustBarWidth();
		},
	},
});
</script>

<template>
	<div class="row flex flex-row items-center gap-0">
		<div class="text-container basis-5/12">
			<p class="label self-center">{{ label }}</p>
			<p class="stat">{{ stat }}</p>
		</div>
		<div class="bar-container rounded basis-7/12">
			<div
				class="bar rounded"
				:class="barId"
				:id="barId"
			></div>
		</div>
	</div>
</template>

<style scoped>
.row {
	width: 100%;
}

.bar {
	height: 100%;
}

.bar-container {
	height: 1.7em;
	/* padding: 0.1em; */
}

.label {
	float: left;
	padding-left: 4px !important;
}

.stat {
	float: right;
}

.label,
.stat {
	@apply px-2 py-1 w-fit;
	font-size: 22px;
}

@media (min-width: 32rem) {
	/* Change the label-to-bar ratio when on desktop */

	.text-container {
		@apply basis-1/3;
	}
	.bar-container {
		@apply basis-2/3;
	}
}
</style>
