import { useState } from 'react';
import type { Prosjekt } from '../data/prosjekter';
import './Prosjekter.css';

interface Props {
	readonly prosjekter: Prosjekt[];
	readonly antallSynlige?: number;
}

export default function Prosjekter({ prosjekter, antallSynlige = 2 }: Props) {
	const [visAlle, setVisAlle] = useState(false);
	const synligeProsjekter = visAlle
		? prosjekter
		: prosjekter.slice(0, antallSynlige);
	const harSkjulteProsjekter = prosjekter.length > antallSynlige;

	return (
		<div className="prosjekter-container">
			<h2>Prosjekter</h2>
			<div className="prosjekter-list">
				{synligeProsjekter.map((prosjekt, index) => (
					<div key={`${prosjekt.navn}-${index}`} className="prosjekt-item">
						<h3>{prosjekt.navn}</h3>
						<p className="beskrivelse">{prosjekt.beskrivelse}</p>
						<ul className="teknologier">
							{prosjekt.teknologier.map((teknologi) => (
								<li key={teknologi} className="teknologi">
									# {teknologi}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			{harSkjulteProsjekter && (
				<div className="vis-mer-container">
					<button
						className="vis-mer-knapp"
						onClick={() => setVisAlle(!visAlle)}
					>
						{visAlle ? 'Vis mindre' : 'Vis mer'}
					</button>
				</div>
			)}
		</div>
	);
}
