import React, { useState, useEffect } from "react";

export default function Slider() {
	const [value, onChange] = useState(1);

	useEffect(() => {
		const ele = document.querySelector(".buble");
		if (ele) {
			ele.style.left = `${Number(value / 4)}px`;
		}
	});

	return (
		<div className='slider-parent'>
			<input
				type='range'
				className='upload-effect-level-line'
				min='1'
				max='100'
				value={value}
				onChange={({ target: { value: radius } }) => {
					onChange(radius);
				}}
			/>
			<div className='buble upload-effect-level-pin'>{value}</div>
		</div>
	);
}
