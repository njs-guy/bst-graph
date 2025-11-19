export interface GraphSize {
	width: number;
	barHeight: number;
	fontSize: number;
	nameFontSize: number;
}

// Placeholder graph sizes

export const smallGraph: GraphSize = {
	width: 25,
	barHeight: 16,
	fontSize: 16,
	nameFontSize: 36,
};

export const baseGraph: GraphSize = {
	width: 30,
	barHeight: 5,
	fontSize: 16,
	nameFontSize: 24,
};

export const largeGraph: GraphSize = {
	width: 35,
	barHeight: 5,
	fontSize: 16,
	nameFontSize: 24,
};
