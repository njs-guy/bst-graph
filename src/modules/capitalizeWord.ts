// Capitalize first letter of the word
// "fire" becomes "Fire"
export default function capitalizeWord(word: string) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}
