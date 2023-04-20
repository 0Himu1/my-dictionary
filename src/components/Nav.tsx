import React from 'react';
import { BiBookAlt } from 'react-icons/bi';
import { BsMoon, BsChevronDown } from 'react-icons/bs';

type propstype = {
	className?: string;
};

export default function Nav({ className }: propstype) {
	return (
		<nav className={`flex justify-between items-center ${className}`}>
			<BiBookAlt className="text-3xl md:text-4xl" />
			<div className="flex items-center">
				<div className="flex items-center mr-4">
					<p className="mr-2 text-sm md:text-lg font-bold">Sarif</p>
					<BsChevronDown className="text-lg text-primary" />
				</div>
				<BsMoon className="text-2xl" />
			</div>
		</nav>
	);
}
