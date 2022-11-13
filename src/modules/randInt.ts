// Returns a random int in the specified range

export function randInt(min = 0, max = 100) {
	return Math.floor(Math.random() * max) + min;
}
