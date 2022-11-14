<template>
	<div class="row flex flex-row items-center gap-2">
		<div class="text-container basis-1/3">
			<p class="label">{{ label }}:</p>
			<p class="stat">{{ stat }}</p>
		</div>
		<div class="bar-container basis-2/3">
			<div
				class="bar"
				:class="barId"
				:id="barId"
			></div>
		</div>
	</div>
</template>

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
	},
	methods: {
		adjustBarWidth() {
			let bar = document.getElementById(this.barId);
			let wid = 0;

			// Check whether the stat or bar is null because typescript kept yelling at me about it
			if (this.stat == null || bar == null) {
				return;
			}

			wid = (this.stat / 255) * 100; //convert stat to width percent

			if (wid > 100) {
				wid = 100; // Width cannot be more than 100%
			}

			if (wid < 0) {
				wid = 0; // Width cannot be less than 0%
			}

			bar.style.width = String(wid) + "%";
		},
	},
	mounted: function () {
		// On load
		this.adjustBarWidth();
	},
	watch: {
		stat() {
			this.adjustBarWidth();
		},
	},
});
</script>

<style scoped>
.row {
	width: 100%;
}

.bar {
	height: 100%;
}

.bar-container {
	height: 1.7em;
}

.label {
	float: left;
}

.stat {
	@apply p-2 w-fit;
	float: right;
}

.label,
.stat {
	font-size: 18px;
}

@media (min-width: 32rem) {
	.text-container {
		@apply basis-1/4;
	}
	.bar-container {
		@apply basis-3/4;
	}
}
</style>
