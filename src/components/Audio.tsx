import React, { useEffect } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

type audio = {
	src: string;
};

const AudioPlayer = ({ src }: audio) => {
	const playAudio = () => {
		const audio = new Audio(src);
		audio.loop = false;
		audio.play();
	};

	return (
		<div
			className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/25 rounded-full cursor-pointer"
			onClick={() => playAudio()}
		>
			<BsFillPlayFill className="text-primary text-2xl md:text-3xl" />
		</div>
	);
};

export default AudioPlayer;
