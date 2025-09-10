export interface Prosjekt {
	navn: string;
	beskrivelse: string;
	teknologier: string[];
	link: string;
}

export const prosjekter: Prosjekt[] = [
	{
		navn: 'Prosjekt 1',
		beskrivelse: 'Beskrivelse av prosjekt 1.',
		teknologier: ['JavaScript', 'Express', 'PostgreSQL'],
		link: '/',
	},
	{
		navn: 'Brainstorming-app',
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
