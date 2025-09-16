export interface Utdanning {
	periode: string;
	skole: string;
	program: string;
	detaljer: string[];
}

export const utdanning: Utdanning[] = [
	{
		periode: 'sep. 2022 - mar. 2024',
		skole: 'Fyrstikkalleen videregående skole',
		program: 'Informasjonsteknologi og medieproduksjon',
		detaljer: ['Poengsum: 54', 'Fravær: 3 timer'],
	},
	{
		periode: 'aug. 2019 - juni. 2022',
		skole: 'Skøyenåsen ungdomsskole',
		program: 'Ungdomsskole',
		detaljer: ['Poengsum: 50', 'Fravær: 1 time'],
	},
];
