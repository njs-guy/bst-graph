// Outputs the graph to a png or svg image.

import { elementToSVG } from "dom-to-svg";
import { graphState } from "./graphState";
import { saveQuality } from "./appConfig";

const imageType = {
	PNG: "png",
	SVG: "svg",
};

export function outputImage(imgType = imageType.SVG) {
	let output;
	let element = document.getElementById("output");

	// Check whether output element is null because typescript kept yelling at me about it
	if (element != null) {
		output = element;
	} else {
		return; // If element is null, do nothing
	}

	let fileName = graphState.name; // name of file. not extension.

	// Convert graph html to svg
	let svg = elementToSVG(output);

	// Serialize the svg xml to a string
	let s = new XMLSerializer();
	let strSVG = s.serializeToString(svg);

	// Save that string as an svg file
	let file = new Blob([strSVG], {
		type: "image/svg+xml;charset=utf-8",
	});
	const a = document.createElement("a");
	const url = URL.createObjectURL(file);

	// If image should be an svg
	if (imgType == imageType.SVG) {
		// Download svg file
		a.href = url;
		a.download = fileName + ".svg";
		document.body.appendChild(a);
		a.click();

		// Remove created link
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	}

	// if the image should be a png
	if (imgType == imageType.PNG) {
		let canvas = document.createElement("canvas");
		let size = element.getBoundingClientRect();
		const qSel = document.getElementById(
			"quality-select"
		) as HTMLSelectElement;
		let w: number;
		let h: number;

		if (qSel != null) {
			// take quality multiplier from qSel
			let quality = Number(qSel.value);

			// Save quality to local storage
			saveQuality(String(quality));

			w = size.width * quality;
			h = size.height * quality;
		} else {
			w = size.width;
			h = size.height;
		}
		let img = new Image();

		img.onload = () => {
			canvas.width = w;
			canvas.height = h;

			// Draw image from canvas
			canvas.getContext("2d")?.drawImage(img, 0, 0, w, h);

			// download PNG
			let png = canvas.toDataURL();
			a.href = png;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();

			// Remove created link
			document.body.removeChild(a);
			window.URL.revokeObjectURL(png);
		};

		img.src = url;

		// Get SVG size source:
		// https://stackoverflow.com/a/24649456

		// Convert SVG to PNG source:
		// https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
	}
}
