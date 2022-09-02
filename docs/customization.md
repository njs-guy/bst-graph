# Customization

BST Graph allows for you to locally change its colors in  code. Now, don't let that intimidate you if you don't know JavaScript. Thanks to [Tailwind CSS](https://tailwindcss.com/), the color values can easily be changed in tailwind.config.js at the root of the directory like you would a config file. For each color, the DEFAULT value is what the color will be in light mode, while the dark value is what the color will be in dark mode.

(This file is currently a WIP.)

# Colors

# Fonts

# Advanced

For more advanced customization, BST Graph can be changed like any Tailwind project. See [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration). If you'd like to go even further to change the layout in code, you might want to check out the documentation for [Vue.js](https://vuejs.org/guide/introduction.html) and [Tailwind CSS](https://tailwindcss.com/docs/installation). Just keep in mind that elementToSVG from [DOM to SVG](https://www.npmjs.com/package/dom-to-svg) is set to grab the HTML element with the "output" ID, which happens to be the graph at the top of the page. If your goal is to only change the graph's appearance, keep a close eye on `Graph.vue` and `Bar.vue`. Both of these are found in `src > components`.