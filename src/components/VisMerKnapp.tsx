import './VisMerKnapp.css';

interface Props {
	readonly visAlle: boolean;
	readonly onClick: () => void;
	readonly visMerTekst?: string;
	readonly visMindreTekst?: string;
}

export default function VisMerKnapp({
	visAlle,
	onClick,
	visMerTekst = 'Vis mer',
	visMindreTekst = 'Vis mindre',
}: Props) {
	return (
		<div className="vis-mer-container ">
			<button className="vis-mer-knapp subtle" onClick={onClick}>
				<svg
					className={`pil-ikon ${visAlle ? 'rotert' : ''}`}
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 10L12 15L17 10"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<span className="knapp-tekst">
					{visAlle ? visMindreTekst : visMerTekst}
				</span>
			</button>
		</div>
	);
}
