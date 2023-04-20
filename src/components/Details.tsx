import React from 'react';
type detailsProps = {
	data: {
		definition: string;
	}[];
	className?: string;
	title: string;
	synonyms?: string[] | null;
};

export default function Details({
	data,
	className,
	title,
	synonyms,
}: detailsProps) {
	return (
		<>
			<div className={` ${className}`}>
				<p className="text-base md:text-xl font-bold mb-4">{title}</p>
				<p className="text-sm md:text-lg text-gray">Meaning</p>
				<ul className="list-disc p-6 list-style ">
					{data.map((p, i) => (
						<li key={i + 1}>
							<p className="text-sm md:text-lg">{p.definition}</p>
						</li>
					))}
				</ul>
			</div>
			{synonyms && (
				<div className="flex mb-9 text-sm md:text-lg">
					<p className="text-gray ">Synonyms:</p>
					<p className="font-bold text-primary ml-4">
						{synonyms?.map(t => t + ', ')}
					</p>
				</div>
			)}
		</>
	);
}
