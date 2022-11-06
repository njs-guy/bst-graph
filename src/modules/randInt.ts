// Returns a random int in the specified range

export function randInt(min: number = 0, max: number = 100) {
	return Math.floor(Math.random() * max) + min;
}
