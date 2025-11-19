import { elementToSVG } from "dom-to-svg";

export function outputImage(exportAsSvg = false, fileName = "bst") {
	const element = document.getElementById("bst-graph");

	// Do nothing if output is null
	if (element === null) {
		return;
	}

	// Convert graph html to svg
	const svg = elementToSVG(element);

	// Serialize the svg xml to a string
	const strSvg = new XMLSerializer().serializeToString(svg);

	// Save that string as an svg file
	const file = new Blob([strSvg], {
		type: "image/svg+xml;charset=utf-8",
	});
	const a = document.createElement("a");
	const url = URL.createObjectURL(file);

	if (exportAsSvg) {
		// Download svg file
		a.href = url;
		a.download = fileName + ".svg";
		document.body.appendChild(a);
		a.click();

		// Remove created link
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	} else {
		// Image is a png
		const canvas = document.createElement("canvas");
		const size = element.getBoundingClientRect();
		const qSel = document.getElementById(
			"quality-select"
		) as HTMLSelectElement;
		let w: number;
		let h: number;

		if (qSel !== null) {
			// take quality multiplier from qSel
			const quality = Number(qSel.value);

			// Save quality to local storage
			// saveQuality(quality);

			w = size.width * quality;
			h = size.height * quality;
		} else {
			w = size.width;
			h = size.height;
		}
		const img = new Image();

		img.onload = () => {
			canvas.width = w;
			canvas.height = h;

			// Draw image from canvas
			canvas.getContext("2d")?.drawImage(img, 0, 0, w, h);

			// download PNG
			const png = canvas.toDataURL();
			a.href = png;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();

			// Remove created link
			document.body.removeChild(a);
			window.URL.revokeObjectURL(png);
		};

		img.src = url;
	}
}

// Get SVG size source:
// https://stackoverflow.com/a/24649456

// Convert SVG to PNG source:
// https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
