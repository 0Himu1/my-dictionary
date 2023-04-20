import React, { useState } from 'react';
import { BiBookAlt } from 'react-icons/bi';
import { BsMoon, BsChevronDown, BsSun } from 'react-icons/bs';

type propstype = {
	className?: string;
	setDarkMode: Function;
	darkMode: boolean;
	setFont: Function;
	font: string;
};

export default function Nav({
	className,
	setDarkMode,
	darkMode,
	setFont,
	font,
}: propstype) {
	const [showFontOption, setShowFontOption] = useState(true);
	return (
		<nav className={`flex justify-between items-center ${className}`}>
			<BiBookAlt className="text-3xl md:text-4xl" />
			<div className="flex items-center">
				<div
					className="flex items-center mr-4 relative cursor-pointer"
					onClick={() => setShowFontOption(!showFontOption)}
				>
					<p className="mr-2 text-sm md:text-lg font-bold">
						{font === 'font-merriweather' ? 'Serif' : 'Sans Sarif'}
					</p>
					<BsChevronDown className="text-lg text-primary" />
					<div
						className={` ${
							showFontOption ? 'hidden' : ''
						} bg-dimWhite dark:bg-dimBlack dark:text-dimWhite absolute top-6 left-0 shadow-sm`}
					>
						<p
							onClick={() => setFont('font-inter')}
							className="whitespace-nowrap text-sm border-b border-dimBlack/50  p-1 mb-2"
						>
							Sans Sarif
						</p>
						<p
							onClick={() => setFont('font-merriweather')}
							className="whitespace-nowrap text-sm border-b border-dimBlack/50  p-1"
						>
							Sarif
						</p>
					</div>
				</div>
				{darkMode ? (
					<BsMoon
						className="text-2xl cursor-pointer"
						onClick={() => {
							setDarkMode(!darkMode);
							console.log(darkMode);
						}}
					/>
				) : (
					<BsSun
						className="text-2xl cursor-pointer"
						onClick={() => {
							setDarkMode(!darkMode);
							console.log(darkMode);
						}}
					/>
				)}
			</div>
		</nav>
	);
}
