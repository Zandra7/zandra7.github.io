import { useState } from 'react';
import type { Utdanning } from '../data/utdanning';
import VisMerKnapp from './VisMerKnapp';
import './Utdanning.css';

interface UtdanningProps {
	readonly utdanning: Utdanning[];
	readonly antallSynlige?: number;
}

export default function Utdanning({
	utdanning,
	antallSynlige = 1,
}: UtdanningProps) {
	const [visAlle, setVisAlle] = useState(false);
	const synligUtdanning = visAlle
		? utdanning
		: utdanning.slice(0, antallSynlige);
	const harSkjultUtdanning = utdanning.length > antallSynlige;

	return (
		<div className="utdanning-container">
			<h2>Utdanning</h2>
			<div className="timeline">
				{synligUtdanning.map((skole, index) => (
					<div key={`${skole.skole}-${index}`} className="utdanning-item">
						<div className="timeline-left">
							<p className="periode">{skole.periode}</p>
						</div>
						<div className="timeline-center">
							<div className="timeline-dot" />
							<div className="timeline-line-bottom" />
						</div>
						<div className="timeline-right">
							<p className="periode">{skole.periode}</p>
							<h3>{skole.skole}</h3>
							<p className="program subtle">{skole.program}</p>
							<ul className="detaljer">
								{skole.detaljer.map((detalj) => (
									<li key={detalj}>{detalj}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			{harSkjultUtdanning && (
				<VisMerKnapp visAlle={visAlle} onClick={() => setVisAlle(!visAlle)} />
			)}
		</div>
	);
}
