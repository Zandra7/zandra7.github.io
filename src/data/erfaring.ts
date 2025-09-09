export interface Jobb {
	periode: string;
	tittel: string;
	bedrift: string;
	beskrivelse: string[];
	teknologier: string[];
}

export const jobber: Jobb[] = [
	{
		periode: 'aug. 2024 - Nå',
		tittel: 'Lærling i IT-utvikling',
		bedrift: 'Nav IT, Oslo',
		beskrivelse: [
			'Utvikler og vedlikeholder applikasjoner brukt av Nav',
			'Jobber med moderne React-løsninger og TypeScript',
			'Deltar i teamarbeid og agile utviklingsmetoder',
		],
		teknologier: ['Typescript', 'React', 'Node.js', 'Git', 'Figma'],
	},
	{
		periode: 'aug. 2023 - feb. 2024',
		tittel: 'Praktikant IT-utvikling',
		bedrift: 'Glasspaper Solutions',
		beskrivelse: [
			'Jobbet med frontend og design én dag i uka hos glasspaper solutions',
			'Arbeidet med en intern applikasjon for å bli kjent med ulike verktøy',
		],
		teknologier: ['Vue', 'Tailwind', 'Figma', 'JavaScript'],
	},
	{
		periode: 'sep. 2020 - mar. 2021',
		tittel: 'Kodeinstruktør',
		bedrift: 'Oslo kommune',
		beskrivelse: [
			'Var kodeinstruktør for elever på 4. trinn i Scratch',
			'Forklarte hva de skulle gjøre på tavla og hjalp til med det de trengte hjelp med',
		],
		teknologier: ['Scratch'],
	},
];
