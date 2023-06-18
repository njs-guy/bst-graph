<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LogoIcon",
	props: {
		background: String,
	},
});
</script>

<template>
	<svg
		viewBox="0 0 26.950274 26.950274"
		class="w-12 h-12 mr-2"
		alt="BST Graph logo"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>BST Graph</title>
		<g transform="translate(-9.6616352,-6.324601)">
			<rect
				class="logo-bg"
				id="rect286"
				width="26.696274"
				height="26.696274"
				x="9.7886353"
				y="6.451601"
				ry="1.5"
			/>
			<rect
				style="fill: #ef4444"
				id="rect1010"
				width="15.538331"
				height="5.4504895"
				x="11.825352"
				y="8.3982029"
				ry="1"
			/>
			<rect
				style="fill: #3b82f6"
				id="rect1740"
				width="11.094542"
				height="5.4504895"
				x="11.825351"
				y="17.074493"
				ry="1"
			/>
			<rect
				style="fill: #22c55e"
				id="rect1742"
				width="22.684328"
				height="5.4504895"
				x="11.825351"
				y="25.750784"
				ry="1"
			/>
		</g>
	</svg>
</template>
