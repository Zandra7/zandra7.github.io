import { useState } from 'react';
import type { Jobb } from '../data/erfaring';
import VisMerKnapp from './VisMerKnapp';
import './Erfaring.css';

interface ErfaringProps {
	readonly jobber: Jobb[];
	readonly antallSynlige?: number;
}

export default function Erfaring({ jobber, antallSynlige = 2 }: ErfaringProps) {
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
								{jobb.teknologier.map((teknologi) => (
									<li key={teknologi} className="teknologi">
										# {teknologi}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			{harSkjulteJobber && (
				<VisMerKnapp visAlle={visAlle} onClick={() => setVisAlle(!visAlle)} />
			)}
		</div>
	);
}
