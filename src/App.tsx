import { BsFillPlayFill, BsSearch } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import Nav from './components/Nav';
import Details from './components/Details';
import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import Audio from './components/Audio';

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

export default function App() {
	const [keyword, setKeyword] = useState<string>('Happy');
	const [data, setData] = useState<data>([]);
	const [url, setUrl] = useState('');
	const [darkMode, setDarkMode] = useState(false);
	const [font, setFont] = useState('font-merriweather');

	const fetchData = async (searchUrl: string) => {
		const res = await fetch(searchUrl);
		const json: data = await res.json();
		setData(json);
	};

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

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
		<main
			className={`min-h-screen p-6 md:p-10 lg:px-52 ${font} text-dimBlack dark:text-dimWhite dark:bg-dimBlack`}
		>
			<Nav
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				className="mb-6 md:mb-14"
				setFont={setFont}
				font={font}
			/>
			<div className="mb-6 md:mb-12 bg-[#f4f4f4] rounded-md">
				<form
					action=""
					className="flex items-center w-full bg-dimWhitext-dimWhite dark:bg-[#1f1f1f] rounded-lg"
					onSubmit={e => handleSubmit(e)}
				>
					<input
						type="text"
						className="w-full font-merriweathe dark:text-dimWhite md:text-xl font-bold px-6 py-4 md: md:py-5 bg-transparent outline-none"
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
					{data[0]?.phonetics[0]?.audio && (
						<Audio src={data[0]?.phonetics[0]?.audio} />
					)}
				</div>
			)}

			{data[0]?.meanings.map((o, i) => (
				<Details
					data={o.definitions}
					title={o.partOfSpeech}
					className=""
					synonyms={o.synonyms.length > 0 ? o.synonyms : null}
					key={(i + 1)}
				/>
			))}

			{data[0]?.sourceUrls && (
				<div className="flex items-center text-sm md:text-lg">
					<p className="text-sm text-gray ">Source:</p>
					<a href="#" target="_blank" className="flex">
						<p className="ml-4 underline">{data[0]?.sourceUrls[0]}</p>
						<FiExternalLink className="ml-2" />
					</a>
				</div>
			)}
		</main>
	);
}
