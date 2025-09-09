export interface Prosjekt {
	navn: string;
	beskrivelse: string;
	teknologier: string[];
}

export const prosjekter: Prosjekt[] = [
	{
		navn: 'Prosjekt 1',
		beskrivelse: 'Beskrivelse av prosjekt 1.',
		teknologier: ['React', 'Node.js', 'MongoDB'],
	},
	{
		navn: 'Prosjekt 2',
		beskrivelse: 'Beskrivelse av prosjekt 2.',
		teknologier: ['Vue.js', 'Express', 'PostgreSQL'],
	},
	{
		navn: 'Prosjekt 3',
		beskrivelse: 'Beskrivelse av prosjekt 3.',
		teknologier: ['Astro', 'TypeScript', 'CSS'],
	},
];
