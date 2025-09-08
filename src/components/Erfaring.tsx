import { useState } from 'react';
import type { Jobb } from '../data/erfaring';
import './Erfaring.css';

interface Props {
	readonly jobber: Jobb[];
	readonly antallSynlige?: number;
}

export default function Erfaring({ jobber, antallSynlige = 2 }: Props) {
	const [visAlle, setVisAlle] = useState(false);
	const synligeJobber = visAlle ? jobber : jobber.slice(0, antallSynlige);
	const harSkjulteJobber = jobber.length > antallSynlige;

	return (
		<div className="erfaring-container">
			<h2>Erfaring</h2>
			<div className="timeline">
				{synligeJobber.map((jobb, index) => (
					<div key={`${jobb.tittel}-${index}`} className="job">
						<div className="timeline-left">
							<p className="periode">{jobb.periode}</p>
						</div>
						<div className="timeline-center">
							<div className="timeline-dot" />
							<div className="timeline-line-bottom" />
						</div>
						<div className="timeline-right">
							<p className="periode">{jobb.periode}</p>
							<h3>{jobb.tittel}</h3>
							<p className="bedrift subtle">{jobb.bedrift}</p>
							<h4>Oppsummering:</h4>
							<ul>
								{jobb.beskrivelse.map((punkt) => (
									<li key={punkt}>{punkt}</li>
								))}
							</ul>
							<ul className="teknologier">
								{jobb.teknologier.map((tech) => (
									<li key={tech} className="teknologi">
										# {tech}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			{harSkjulteJobber && (
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
