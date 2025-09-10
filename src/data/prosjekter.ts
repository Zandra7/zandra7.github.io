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
		teknologier: ['Kotlin', 'Gradle', 'JUnit', 'Git'],
		link: 'https://github.com/Zandra7/kotlin-Tic-Tac-Toe',
	},
	{
		navn: 'Middagshjelp',
		beskrivelse:
			'En fullstack webapplikasjon som lar deg lagre og hente ut tilfeldige middagsretter fra en database.',
		teknologier: [
			'React',
			'TypeScript',
			'Kotlin',
			'Ktor',
			'PostgreSQL',
			'Docker',
		],
		link: 'https://github.com/Zandra7/fullstack-app',
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
			'Git',
		],
		link: 'https://github.com/Zandra7/Brainstorming-app',
	},

	{
		navn: 'Underchurch spill',
		type: 'skoleprosjekt',
		beskrivelse:
			'Et 2D-spill laget i Godot med enkel tutorial og grunnleggende mekanikker. Spillet er laget for to personer som deler ett tastatur.',
		teknologier: ['Godot', 'Git', 'Spillutvikling'],
		link: 'https://github.com/Zandra7/Underchurch',
	},
];
