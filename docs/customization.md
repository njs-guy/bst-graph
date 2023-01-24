# Customization

BST Graph allows for you to locally change its colors in code.
Now, don't let that intimidate you if you don't know JavaScript.
Thanks to [Tailwind CSS](https://tailwindcss.com/),
the color values can easily be changed in `tailwind.config.cjs`
at the root of the directory like you would a config file.

(This doc is currently a WIP.)

## Colors

TODO: Update docs with new configuration.

Colors can be changed to any [color value accepted by CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
For each color, the `DEFAULT` value is what the color will be in light mode,
while the `dark` value is what the color will be in dark mode. Examples:

```js
//tailwind.config.js

// CSS names
'panel': {
    DEFAULT: 'red',
    dark: 'dodgerblue'
},

// Hex values
'panel': {
    DEFAULT: '#FF0000',
    dark: '#0094FF'
},

// rgb values
'panel': {
    DEFAULT: 'rgb(255, 0, 0)',
    dark: 'rgb(0, 148, 255)'
},

// rgba values
'panel': {
    DEFAULT: 'rgba(255, 0, 0, 255)',
    dark: 'rgba(0, 148, 255, 255)'
},

// hsl values
'panel': {
    DEFAULT: 'hsl(0, 100%, 50%)',
    dark: 'hsl(205, 100%, 50%)'
},
```

[More info on customizing Tailwind CSS colors](https://tailwindcss.com/docs/customizing-colors).

## Fonts

To change the main font, change the `fontFamily` property.
Inside of this are two more properties: `sans` and `serif`.
Sans-serif fonts should go under the `sans` property and Serif fonts should go
under the `serif` property. As an example:

```js
// tailwind.config.js

// Fonts
fontFamily: {
    sans: [
    'Roboto',
    'Arial', // Fallback fonts
    'sans-serif',
    ],
    serif: [
    'Merriweather',
    'Verdana', // Fallback fonts
    'serif'
    ],
},
```

### Self-hosted fonts

If you plan on hosting a fork of BST Graph, self hosting your own fonts is not
required but recommended. An easy and open source way of going about this is
through [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts).

After deciding on your font(s), replace the fonts found in `./public/fonts`
with the new ones. Then, replace the CSS in `./public/fonts.css`. As an example:

```css
/* fonts.css */

/* roboto-regular - latin */
@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	src: url("./fonts/roboto-v30-latin-regular.eot"); /* IE9 Compat Modes */
	src: local(""),
		url("./fonts/roboto-v30-latin-regular.eot?#iefix") format("embedded-opentype"),
		/* IE6-IE8 */
            url("./fonts/roboto-v30-latin-regular.woff2") format("woff2"),
		/* Super Modern Browsers */
            url("./fonts/roboto-v30-latin-regular.woff")
			format("woff"),
        /* Modern Browsers */
			url("./fonts/roboto-v30-latin-regular.ttf") format("truetype"),
		/* Safari, Android, iOS */
			url("./fonts/roboto-v30-latin-regular.svg#Roboto") format("svg");
}
```

## Advanced

For more advanced customization,
BST Graph can be changed like any Tailwind project.
See [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration).
If you'd like to go even further to change the layout in code, you might want to
check out the documentation for [Vue.js](https://vuejs.org/guide/introduction.html)
and [Tailwind CSS](https://tailwindcss.com/docs/installation).
Just keep in mind that elementToSVG from [DOM to SVG](https://www.npmjs.com/package/dom-to-svg)
is set to grab the HTML element with the "output" ID, which happens to be
the graph at the top of the page.
If your goal is to only change the graph's appearance, keep a close eye on
`Graph.vue` and `Bar.vue`. Both of these are found in `./src/components`.
