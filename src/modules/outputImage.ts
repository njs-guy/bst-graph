// Outputs the graph to a png or svg image.

import { elementToSVG } from "dom-to-svg";
import { graphState } from "./graphState";
import { saveQuality } from "./appConfig";

const IMG_TYPE = {
	PNG: "png",
	SVG: "svg",
};

// Creates and downloads the graph image
export function outputImage(imgType = IMG_TYPE.SVG) {
	let output;
	const ELEMENT = document.getElementById("output");

	// Check whether output element is null because typescript kept yelling at me about it
	if (ELEMENT != null) {
		output = ELEMENT;
	} else {
		return; // If element is null, do nothing
	}

	const FILE_NAME = graphState.name; // name of file. not extension.

	// Convert graph html to svg
	const SVG = elementToSVG(output);

	// Serialize the svg xml to a string
	const S = new XMLSerializer();
	const STR_SVG = S.serializeToString(SVG);

	// Save that string as an svg file
	const FILE = new Blob([STR_SVG], {
		type: "image/svg+xml;charset=utf-8",
	});
	const A = document.createElement("a");
	const url = URL.createObjectURL(FILE);

	// If image should be an svg
	if (imgType == IMG_TYPE.SVG) {
		// Download svg file
		A.href = url;
		A.download = FILE_NAME + ".svg";
		document.body.appendChild(A);
		A.click();

		// Remove created link
		document.body.removeChild(A);
		window.URL.revokeObjectURL(url);
	}

	// if the image should be a png
	if (imgType == IMG_TYPE.PNG) {
		const CANVAS = document.createElement("canvas");
		const SIZE = ELEMENT.getBoundingClientRect();
		const Q_SEL = document.getElementById(
			"quality-select"
		) as HTMLSelectElement;
		let w: number;
		let h: number;

		if (Q_SEL != null) {
			// take quality multiplier from qSel
			const QUALITY = Number(Q_SEL.value);

			// Save quality to local storage
			saveQuality(String(QUALITY));

			w = SIZE.width * QUALITY;
			h = SIZE.height * QUALITY;
		} else {
			w = SIZE.width;
			h = SIZE.height;
		}
		const IMG = new Image();

		IMG.onload = () => {
			CANVAS.width = w;
			CANVAS.height = h;

			// Draw image from canvas
			CANVAS.getContext("2d")?.drawImage(IMG, 0, 0, w, h);

			// download PNG
			const PNG = CANVAS.toDataURL();
			A.href = PNG;
			A.download = FILE_NAME;
			document.body.appendChild(A);
			A.click();

			// Remove created link
			document.body.removeChild(A);
			window.URL.revokeObjectURL(PNG);
		};

		IMG.src = url;

		// Get SVG size source:
		// https://stackoverflow.com/a/24649456

		// Convert SVG to PNG source:
		// https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
	}
}
