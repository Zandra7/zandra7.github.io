export interface Prosjekt {
	navn: string;
	type?: string;
	beskrivelse: string;
	teknologier: string[];
	link: string;
}

export const prosjekter: Prosjekt[] = [
	{
		navn: 'Tic-Tac-Toe i Kotlin',
		type: 'parprogrammering',
		beskrivelse:
			'Tre på rad spill laget i Kotlin som en parproggrammerinsoppgave for å bli mer kjent med kotlin og testing.',
		teknologier: ['Kotlin', 'Gradle', 'JUnit'],
		link: 'https://github.com/Zandra7/kotlin-Tic-Tac-Toe',
	},
	{
		navn: 'Brainstorming-app',
		type: 'skoleprosjekt',
		beskrivelse:
			'En kreativ samarbeidsplattform som lar deg og andre lage eller inngå rom der idéer deles anonymt som post-it-lapper.',
		teknologier: [
			'Node.js',
			'Express.js',
			'SQLite',
			'HTML',
			'CSS',
			'JavaScript',
		],
		link: 'https://github.com/Zandra7/Brainstorming-app',
	},

	{
		navn: 'Prosjekt 3',
		beskrivelse: 'Beskrivelse av prosjekt 3.',
		teknologier: ['Astro', 'TypeScript', 'CSS'],
		link: '/',
	},
];
