import { BsFillPlayFill, BsSearch } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import Nav from './components/Nav';
import Details from './components/Details';
import { FormEvent, MouseEvent, useEffect, useState } from 'react';

type data = {
	word: string;
	phonetic?: string;
	phonetics: {
		text: string;
		audio: string;
		sourceUrl?: string;
	}[];
	meanings: {
		partOfSpeech: string;
		definitions: {
			definition: string;
		}[];
		synonyms: string[];
	}[];
	sourceUrls: string[];
}[];

const damidata = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat id a harum laudantium corrupti magnam aut consequuntur optio magni?',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat id a harum laudantium corrupti magnam aut consequuntur optio magni?',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat id a harum laudantium corrupti magnam aut consequuntur optio magni?',
];

export default function App() {
	const [keyword, setKeyword] = useState<string>('keyword');
	const [data, setData] = useState<data>([]);
	const [url, setUrl] = useState('');

	const fetchData = async (searchUrl: string) => {
		const res = await fetch(searchUrl);
		const json: data = await res.json();
		setData(json);
	};

	useEffect(() => {
		setUrl(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURI(keyword)}`
		);
		fetchData(url);
	}, [url]);

	const handleSubmit = (
		e?:
			| MouseEvent<SVGElement, MouseEvent>
			| undefined
			| FormEvent<HTMLFormElement>
	) => {
		e?.preventDefault();
		if (keyword) {
			setUrl(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURI(keyword)}`
			);
		}
	};

	const phonetic = data[0]?.phonetics.filter(o => o.text && o.audio)[0];

	return (
		<main className="p-6 md:p-10 lg:px-52 font-merriweather text-dimBlack">
			<Nav className="mb-6 md:mb-14" />
			<div className="mb-6 md:mb-12">
				<form
					action=""
					className="flex items-center w-full bg-[#f4f4f4] rounded-lg"
					onSubmit={e => handleSubmit(e)}
				>
					<input
						type="text"
						className="w-full font-merriweathe md:text-xl font-bold px-6 py-4 md: md:py-5 bg-transparent outline-none"
						value={keyword}
						onChange={e => setKeyword(e.target.value)}
					/>
					<BsSearch
						className="text-lg mr-6 text-primary cursor-pointer"
						onClick={() => handleSubmit()}
					/>
				</form>
			</div>
			{data[0]?.word && (
				<div className="flex items-center justify-between mb-6">
					<div className="">
						<h1 className="font-bold text-3xl md:text-6xl mb-2">
							{data[0]?.word}
						</h1>
						<p className="text-primary text-lg md:text-2xl">{phonetic?.text}</p>
					</div>
					<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/25 rounded-full cursor-pointer">
						<BsFillPlayFill className="text-primary text-2xl md:text-3xl" />
					</div>
				</div>
			)}

			{data[0]?.meanings.map(o => (
				<Details
					data={o.definitions}
					title={o.partOfSpeech}
					className=""
					synonyms={o.synonyms.length > 0 ? o.synonyms : null}
				/>
			))}

			{data[0]?.sourceUrls && (
				<div className="flex items-center text-sm md:text-lg">
					<p className="text-sm text-gray ">Source:</p>
					<a href="#" target="_blank" className="flex">
						<p className="text-dimBlack ml-4 underline">
							{data[0]?.sourceUrls[0]}
						</p>
						<FiExternalLink className="ml-2" />
					</a>
				</div>
			)}
		</main>
	);
}
